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
                quantity
            }
        }
    ]

});