const Koa = require('koa');
const app = new Koa();

// Super simple koa server without routing yet
app.use(async ctx => (ctx.body = 'Hello World'));

app.listen(3000, () => console.log('Koa server started on PORT 3000......'));
