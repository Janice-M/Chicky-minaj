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
                min: [1, 'Quantity cannot be less than one item'],
                default: 1
            },
            price: Number

    }

    ], 
    bill: {
        type: Number,
        
    }

});