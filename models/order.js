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
                    required: true,
                    min: [1, 'Quantity cannot be less than 1']
                },
            price: Number,
            }
        }
    ],
    bill: {
        type: Number, 
        requires: true
    },

    date_added:{
        type: Dte,
        default: Date.now
    }


});

module.exports = Order = mongoose.model('order', OrderSchema);