const express=require("express");
const bodyParser=require("body-parser");
var path=require("path");
app=express();

app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html");
});
app.use(express.static(__dirname + '/assets'));
app.listen(process.env.PORT||3000,function(){
    console.log("server is running at port 3000");
});