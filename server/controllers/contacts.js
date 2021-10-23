let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contacts');

module.exports.displayContactslist = (req, res, next) => {
    Book.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(Contactlist);

            res.render('contacts/list', 
            {title: 'Contacts', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contacts/add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "contact_Name": req.body.contact_Name,
        "contact_Number": req.body.contact_Number,
        "email_Address": req.body.email_Address,
        
    });

    Contact.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/edit', {title: 'Edit Book', book: bookToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "contact_Name": req.body.contact_Name,
        "contact_Number": req.body.contact_Number,
        "email_Address": req.body.email_Address,
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/contact-list');
        }
    });
}