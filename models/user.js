const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require ('validator');

const UserSchema = new Schema ({
    name: {
        type:String, 
        required: true

    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter valid email']

    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlegnth: [6, 'Minimum password legnth is 6 characters']
    },

    register_date: {
        type: Date,
        default: Date.now

    }
    
})