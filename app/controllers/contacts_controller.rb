class ContactsController < ApplicationController
    def index
<<<<<<< HEAD
        contacts = Contact.all
        render json: contacts
=======
        render json: Contact.all
>>>>>>> b66e25f (working on crud)
    end
end
