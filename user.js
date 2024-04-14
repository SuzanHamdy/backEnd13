
const mongoose =require('mongoose')
const validator =require ('validator')
const { default: isEmail } = require('validator/lib/isEmail')



const User = mongoose.model('User' , {
    userName : {
        type : String ,
        required : true ,
        trim : true
    },
    password :{
        type : String ,
        required : true ,
        trim : true ,
        minlength : 8 
    } ,
    email :{
        type : String ,
        required : true ,
        trim : true ,
        lowercase :true , 
        unique : true ,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is Invalid');
            }
        }
    } ,
    age : {
        type : Number ,
        default : 18 ,
        validate(value){
            if (value <= 0) {
                throw new Error('Age isnot Postive');
            }
        }
    } ,
    city : {
        type : String ,
        
    }
})

module.exports = User ;








