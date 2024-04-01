const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    busnumber:{
        type:String,
        required:true,
    },
     sheetnumber:{
        type:Number,
        required:true,
     },
      Destination:{
        type:String,
        required:true,
    },
    AvilableSheet:{
        type:Number,
        required:true,
    }
})
const BUS = mongoose.model('BUS' , BusSchema);
module.exports = BUS;