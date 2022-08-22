const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const OrderSchema = new Schema ({

    userId: {
        type: String,
    },
    items: [
        {
            productId: {
                type: String,
            },
            name: {
                type: String,
                quantity: {
                    type: Number,
                    required: true
                    min: [1, 'Quantity cannot be less than 1']
                }
            }
        }
    ]

});