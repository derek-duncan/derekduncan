const Router = require('koa-router');
const path = require('path');
const getFileContents = require('../../lib/getFileContents');
const convertMarkdown = require('../../lib/convertMarkdown');
const base = new Router();

base.get('/stories/:slug', async function (ctx) {
  try {
    const storyPath = path.resolve(__dirname, '../../lib/stories', `${ctx.params.slug}.md`);
    const data = await getFileContents(storyPath);
    const markdown = convertMarkdown(data);
    ctx.body = {
      id: ctx.params.slug,
      body: markdown,
    };
  } catch (err) {
    ctx.errorMessage.notFound(err);
  }
})

base.get('/', async function (ctx) {
  await ctx.render('index.hbs', {
    title: 'Derek Duncan',
    partials: {
      layout: 'partials/layout',
      card: 'partials/card',
      pageSection: 'partials/page-section',
      subtitle: 'partials/subtitle',
    },
  });
});

module.exports = base;
