const Koa=require('koa')
const Router=require('koa-router')

let home=new Router()

let page=new Router()

const app=new Koa()

// 父级路由
let router=new Router()

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})