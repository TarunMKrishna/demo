var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var login = new Schema({
    name:String,
    password:String,
    usn:String,
    email:String,
    phone:Number,
   /* title:String,
    isbn:String,
    pageCount:Number,
    publishedDate:Date,
    thumbnailUrl:String,
    shortDescription: String,
    longDescription:String,
    status:String,
    authors:Array,
    categories:Array,*/
});

mongoose.model('logininfo',login);