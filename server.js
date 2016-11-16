const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const router = require('koa-router')();
const serve = require('koa-static');
const compress = require('koa-compress');

router.get('/', async function (ctx) {
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

const viewsDir = __dirname + '/app/views';
app.use(views(viewsDir, {
  map: { hbs: 'handlebars' },
  extension: 'hbs',
}));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve('./assets'));
app.use(compress());

app.listen(3000);
