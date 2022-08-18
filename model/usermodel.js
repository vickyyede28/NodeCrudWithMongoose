const mongoose  = require("mongoose");

const userschema = new mongoose.Schema({
    name: {type:String, require:true},
    passion: {type:String, require:true},
    country: {type:String, require:true},
    movie: {type:String, require:true}
})

module.exports = mongoose.model("user",userschema)