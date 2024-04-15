const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const romCategorySchema = new Schema({ 
    room1:{
        type:Number,
    },
    room2:{
        type:Number,
    },
    room3:{
        type:Number,
    },
    room4:{
        type:Number,
    }
});

module.exports = mongoose.model('roomCategory', romCategorySchema);

