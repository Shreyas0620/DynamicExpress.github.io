const express = require('express')
const port = 3000;
const app = express();

app.set('view engine', 'hbs');
    

app.get('/', (req,res) => {

    res.render('home',{
        ins : 'Vikrant',
        built:'Built By Cochin Shipyard Limited (CSL) in Kerala'
    })
})
app.get('/service',(req,res)=>{
    res.render('service')
})
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})