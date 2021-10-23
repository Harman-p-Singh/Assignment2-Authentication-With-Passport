let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contact_Name: String,
    contact_Number: String,
    email_Address: String,
}, 
{
    collection: "contacts"
});

module.exports = mongoose.model('Contacts', contactModel);