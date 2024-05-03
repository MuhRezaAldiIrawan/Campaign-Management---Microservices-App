import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({

    accountNumber: {
        type: String,
        required: true
    },

    referenceID: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    emailAddress: {
        type: String,
        required: true
    },

    logoId: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Brand', brandSchema);
