const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new KoaRouter();

// Temporary substitute for Database
const tasks = [
  "Always be coding",
  "Read tech blogs",
  "Take notes!",
  "Mentor others"
];

// Standard Middleware
app.use(json());
app.use(bodyParser());

// EJS Templating Engine
render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false
});

// API
router.get("/api/tasks", ctx => (ctx.body = tasks));

// Routes
router.get("/", index);
router.get("/add", showAdd);
router.post("/add", add);
router.get("*", ctx => (ctx.body = "Unmatached route return to /"));

// List of tasks
async function index(ctx) {
  await ctx.render("index", {
    title: "List of tasks",
    msg:
      "In this app, you'll be able to declutter your memory by making use of computer memory!",
    tasks: tasks
  });
}

// Show add page
async function showAdd(ctx) {
  await ctx.render("add");
}

// Add task
async function add(ctx) {
  tasks.push(ctx.request.body.task); //
  ctx.redirect("/");
}

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Koa server started on PORT 3000......"));
