const mongoose =require('mongoose')
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlparser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){console.log('mongo success');}
    else{ console.log('error in mongo:'+ JSON.stringify(err,undefined,2));}
});

require('./user.model')