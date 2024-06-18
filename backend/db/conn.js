const mongoose = require("mongoose");

const DB ="mongodb+srv://Avinash:AvinashSingh@cluster0.fxhrtlq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})
