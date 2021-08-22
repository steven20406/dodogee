'use strict';

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
require('./lib/service')(app);

const routes = new Router();
console.log('Server running')

routes.get('/', (ctx, next) => {
  ctx.body = 'hello'
})
.get('/test', (ctx, next) => {
  ctx.body = 'yoyo'
})

app.use(routes.routes()).use(routes.allowedMethods())

app.listen(app.port);

module.exports = app;
