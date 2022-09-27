const mongoose = require('mongoose')

var userSchema= new mongoose.Schema({
    fullName:{
        
    },
    email:{
        
    },
    password:{
       
    },
    saltSecret:{
        
    }
});

mongoose.model('User',userSchema);