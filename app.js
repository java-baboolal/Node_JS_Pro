const express=require("express");
const mongoose=require("mongoose");
const  bodyparser=require("body-parser");
const cors=require("cors");
const routes=require("./routes/route");
const path=require("path");
var app=express();

app.use('/api',routes);
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/contactlist')
mongoose.connection.on('connected',()=>{
    console.log("Succesfull")

});

mongoose.connection.on('err',(err)=>{
    if(err){
        console.log("ERROR IN DB")
    }
})

app.get('/',(_req,res)=>{
    res.send('hello there');

})

app.listen(8080,()=> console.log("LIsting on 8080"));
