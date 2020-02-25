const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    ctx.body="artemis"
})

app.listen(3000)