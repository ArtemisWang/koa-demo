const Koa=require('koa')
const app=new Koa()
const bodyparser=require('koa-bodyparser')
app.use(async(ctx)=>{
    if(ctx.url==='/'&&ctx.method==='GET'){
        // 显示表单页面
        let html=`
            <h1>Artemis Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName"/><br/>
                <p>age</p>
                <input name="userAge"/><br/>
                <p>websise</p>
                <input name="webSite"/><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body=html
    }else if(ctx.url==='/'&&ctx.method==='POST'){
        let postData=await parsePostData(ctx)
        ctx.body=postData
    }else{
        ctx.body='<h1>404!</h1>'
    }
})



app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})