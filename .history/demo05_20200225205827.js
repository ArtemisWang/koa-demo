const Koa=require('koa')
const app=new Koa()




app.use(async (ctx)=>{
    let url=ctx.request.url
    let html=await route(url)
    ctx.body=url
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})