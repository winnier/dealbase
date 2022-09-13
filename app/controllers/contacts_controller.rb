class ContactsController < ApplicationController
    def index

        contacts = Contact.all
        render json: contacts

    end

    def create
        contact = Contact.new(contact_params)
        if contact.save
            render json: contact, status: 201
        else
            # render json: {errors: 'this dont work'}
            render json: { errors: contact.errors.full_messages }, status: 422
        end
    end
    # def build // --> this is just for troubleshooting
    #     contact = Contact.create(name: params[:name], email: params[:email], phone_number: params[:phone_number], address: [:address], linkedin_url: params[:linkedin_url], company_id: params[:company_id], owner_id: params[:owner_id])
    # end

    def update
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.update(contact_params)
            render json: contact, status: 204
        else
            render json: { error: "Contact not found" }, status: 422
        end
    end

    def show
        contact = Contact.find(params[:id])
        render json: contact
    end

    def showcompanies
        # companies = Contact.all.uniq{|x| x.company_name}.pluck(:company_name)
        contacts = Contact.all
        names = []
        contacts.each {|contact| names.push(contact.company&.name)}
        
        render json: names.uniq
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
