const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const serve = require('koa-static');
const compress = require('koa-compress');
const logger = require('koa-logger');
const errorMessage = require('./lib/errorMessage');
const baseRouter = require('./app/routers/base');

app.use(logger());
app.use(views(__dirname + '/app/views', {
  map: { hbs: 'handlebars' },
  extension: 'hbs',
}));
app.use(errorMessage());
app.use(bodyParser());
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());
app.use(serve('./public'));
app.use(compress());

app.listen(3000);
