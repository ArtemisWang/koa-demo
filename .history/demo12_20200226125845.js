const Koa=require('koa')
const path=require('path')
const static=require('koa-static')
const app=new Koa()

const staticPath='./static'

app.use(path.join(__dirname,staticPath))
