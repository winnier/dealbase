class ContactsController < ApplicationController
    def index
<<<<<<< HEAD
        contacts = Contact.all
        render json: contacts
=======
        render json: Contact.all
>>>>>>> b66e25f (working on crud)
    end

    def create
        contact = Contact.new(contact_params)
        if contact.save
            render json: deal, status: 201
        else
            render json: { errors: contact.errors.full_messages }, status: 422
        end
    end

    def update
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.update(contact_params)
            render json: contact, status: 204
        else
            render json: { error: "Contact not found" }, status: 422
        end
    end

    def destroy
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.destroy
            render json: {}, status: 200
        else
            render json: { error: "Contact not found" }, status: 404
        end
    end

    private

    def contact_params
        params.permit(
            :name,
            :email, 
            :phone_number, 
            :address, 
            :linkedin_url, 
            :company_id,
            :owner_id
            )
    end
end
