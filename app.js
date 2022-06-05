var express=require("express")
var app=express()
var bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var num1=parseInt(req.body.num1)
    var num2=parseInt(req.body.num2)
    var result=num1+num2
    res.send("Answer is "+result)

})

app.listen(8080,function(req,res){
    console.log("server started at 8080")
})