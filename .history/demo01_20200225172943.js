const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    let url=ctx.url
    // 从request中接收Get请求
    let request=ctx.request
    let req_query=request.query
    let req_querystring=request.querystring

    // 从上下文中直接获取Get请求

    ctx.body={
        url,
        req_query,
        req_querystring
    }
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})