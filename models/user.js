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
    
})