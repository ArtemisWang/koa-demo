const Koa=require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'MyName','Artemis',{
                domain:'127.0.0.1',
                path:'/index',
                maxAge:1000*60*60*24,
                expires:new Date('2020-02-27'),
                httpOnly:false,
                overwrite:false
            }
        )
        ctx.body="hello index"
    }else{
        if(ctx.cookies.get('MyName')){
            ctx.body=ctx.cookies.get('MyName')
        }else{
            ctx.body="cookie is none"
        }

        
    }
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})