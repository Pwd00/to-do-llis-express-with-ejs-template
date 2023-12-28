const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const getDate=require(__dirname+"/date.js");
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
let itemsList=[];
app.get("/",(req,res)=>{
   const day=getDate();
    res.render("list",{itemsList,day});
});
app.post("/",(req,res)=>{
    console.log(req.body)
    const item=req.body.newitem;
    itemsList.push(item);
    res.redirect("/");
})




//// Port server
app.listen(3000,()=>{console.log("Server is running perfectly o port 3000")});