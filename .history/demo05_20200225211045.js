const Koa=require('koa')
const app=new Koa()


async function route(url){
    let page='404.html'
    switch(url){
        case '/':
            page='index.html'
            break
        case '/index':
            page='index.html'
            break
        case '/todo':
            page='todo.html'
            break
        case '/404':
            page="404.html"
            break
        default:
            break
    }
    let html=render(page)
}

app.use(async (ctx)=>{
    let url=ctx.request.url
    let html=await route(url)
    ctx.body=url
})

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000')
})