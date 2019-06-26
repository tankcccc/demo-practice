const express=require('express')
const path = require('path')

const app =express();
app.use(express.static(path.join(__dirname,'public')))


//处理jsonp的路由

app.get('/jsonp',(req,res)=>{
    let cb=req.query.callback
    res.send(cb +"("+JSON.stringify({code:0,msg:'jsonp原理'})+')')
})
app.listen(3000,()=>{
    console.log('3000 ok...')
})