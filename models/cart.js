const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema ({

    userId: {
        type: String
    },

    items:[
        {
            productId:{
                type: String
            },
            name : String,
            quantity:{
                type: Number,
                required: true, 
                min: []
            }

    }

    ]

});