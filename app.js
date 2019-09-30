const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');

// JSON prettier
app.use(json());

// Super simple koa server without routing yet
app.use(async ctx => (ctx.body = { msg: 'Hello World' }));

app.listen(3000, () => console.log('Koa server started on PORT 3000......'));
