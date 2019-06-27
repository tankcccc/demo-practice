const express= require('express')
const bodyParser =require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/',(req,res)=>{
    res.render('reg2.html')
})

app.listen(3000,()=>{
    console.log('3000 ...ok')
})