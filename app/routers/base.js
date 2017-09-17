const Router = require('koa-router');
const path = require('path');
const getFileContents = require('../../lib/getFileContents');
const convertMarkdown = require('../../lib/convertMarkdown');
const base = new Router();

/**
 * Main paths
 */

base.get('/', async function(ctx) {
  await ctx.render('index.hbs', {
    partials: {
      layout: 'partials/layout',
    },
  });
});

base.get('/andyet', async function(ctx) {
  await ctx.render('andyet.hbs', {
    useAlternateBundle: true,
    partials: {
      layout: 'partials/layout',
    },
  });
});

base.get('/docs/:slug', async function(ctx) {
  try {
    const storyPath = path.resolve(
      __dirname,
      '../../docs',
      `${ctx.params.slug}.md`
    );
    const data = await getFileContents(storyPath, 'utf8');
    const markdown = convertMarkdown(data);
    ctx.body = {
      id: ctx.params.slug,
      body: markdown,
    };
  } catch (err) {
    ctx.errorMessage.notFound(err);
  }
});

/**
 * Redirect links because it's _classy_
 */

base.get('/email', function(ctx, next) {
  ctx.redirect('mailto:work@derekduncan.me');
  next();
});

base.get('/github', function(ctx, next) {
  ctx.redirect('https://github.com/derek-duncan');
  next();
});

base.get('/twitter', function(ctx, next) {
  ctx.redirect('https://twitter.com/derique_');
  next();
});

base.get('/insta', function(ctx, next) {
  ctx.redirect('https://instagram.com/derekduncan_');
  next();
});

base.get('/resume', async function(ctx) {
  ctx.type = 'application/pdf';
  ctx.body = await getFileContents(__dirname + '/../../docs/resume.pdf');
});

module.exports = base;
