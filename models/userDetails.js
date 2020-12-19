import mongoose from 'mongoose'

// mongoose = require('mongoose');

export const postSchema = mongoose.Schema({
    // userId: {
    //     type: String,
    //     default: mongoose.Types.ObjectId()
    // },
    firstName: String,
    middleName: String,
    lastName: String,
    contactNo: String,
    birthDate: {
        type: Date,
        default: new Date()
    },
    dateRegistered:{
        type: Date,
        default: new Date()
    },
    classification: String,
    registered: Boolean,
    address: {
            phase: String,
            streetNo: String,
            houseNo: String,
            subdivision:String
        },
    userImage: String
});

const UserDetails = mongoose.model('UserDetails', postSchema);

export default UserDetails;