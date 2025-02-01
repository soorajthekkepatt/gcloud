const express = require('express')
const app = express();
const http = require('http')
const port = 3030;
const server = http.createServer(app)

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/hello',(req,res)=>{
    res.send('<h1>Hello Node</h1>')
})


server.listen(port,()=>{
    console.log(`server running on ${port}`)
})