const fs = require('fs')
const http=require('http')
fs.writeFile('index.html','<h1> Hello World </h1><p> This is Pooja... </p>',(err)=>{
    if(err){
        console.log(err)
    }
})
http.createServer(function(req,res){
    let data=fs.readFileSync('index.html')
    res.write(data)
    res.end()
}).listen(5000)
