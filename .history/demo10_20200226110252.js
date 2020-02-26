const Koa=require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'MyName','Artemis'
        )
        ctx.body="hello index"
    }else{
        ctx.body="hello world"
    }
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})