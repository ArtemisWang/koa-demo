const Koa=require('koa')
const Router=require('koa-router')

let home=new Router()
home.get('/artemis',async(ctx)=>{
    ctx.body="Home Artemis page"
}).get('/todo',async(ctx)=>{
    ctx.body="Home Todo page"
})

let page=new Router()
page.get('/artemis',async(ctx)=>{
    ctx.body="Page Artemis page"
}).get('/todo',async(ctx)=>{
    ctx.body="Page Todo page"
})

const app=new Koa()

// 父级路由
let router=new Router()
router.use('/home',home.routes(),home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})