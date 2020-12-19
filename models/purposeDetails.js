import mongoose from 'mongoose'

// mongoose = require('mongoose');

export const purposeSchema = mongoose.Schema({
    purpose: String,
    userID: String,
    purposeDate: {
        type: Date,
        default: new Date()
    },
});

const PurposeDetails = mongoose.model('PurposeDetails', purposeSchema);

export default PurposeDetails;