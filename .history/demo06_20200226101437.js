const Koa=require('koa')
const Router=require('koa-router')
const app=new Koa()

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})