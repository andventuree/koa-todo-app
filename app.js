const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
const render = require("koa-ejs");

const app = new Koa();
const router = new KoaRouter();

// JSON prettier
app.use(json());

// // Super simple koa server without routing yet
// app.use(async ctx => (ctx.body = { msg: 'Hello World' }));

// Basic routes utilizing router middleware
// router.get('/', ctx => ctx.body = 'Hello, this is a basic Koa server');
// router.get('/booger', ctx => ctx.body = 'Hey, you picked this route!');
// router.get('/array', ctx => ctx.body = ['a', 'b', 'c', 'd']);
// router.get('/object', ctx => ctx.body = {can: 'easily', print: 'json', obj: 'here'});
// router.get('*', ctx => ctx.body = 'catch all route');

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false
});

// Index
router.get("/", async ctx => {
  console.log();
  await ctx.render("index");
});

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Koa server started on PORT 3000......"));
