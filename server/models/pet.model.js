const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."],
        unique: true
    },
    type: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
    },
    skillOne: {
        type: String,
        required: false
    },
    skillTwo: {
        type: String,
        required: false
    },
    skillThree: {
        type: String,
        required: false
    },
},
    { timestamps: true }

);

PetSchema.plugin(uniqueValidator, {message: '\'{VALUE}\' is already in use. Try another name.'});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = { Pet: Pet };