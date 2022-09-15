class CompaniesController < ApplicationController
    def index
        render json: Company.all
    end

    def names
        companies = Company.all
        names = companies.pluck(:name)
        render json: names
    end

    def show_deals
        company = Company.find_by(id: params[:id])
        render json: company.deals
    end

    def show_all_contacts
        company = Company.find_by(id: params[:id])
        render json: company.contacts
    end

    def show
        company = Company.find_by(id: params[:id])
        render json: company
    end

    def showcontacts
        company = Company.find_by(id: params[:id])
        names = []
        companycontacts = company.contacts
        companycontacts.map do |contact|
            names.push(contact.name)
        end
        render json: names.uniq
    end

    def create
        company = Company.new(company_params)
        if company.save
            render json: deal, status: 201
        else
            render json: { errors: company.errors.full_messages }, status: 422
        end
    end

    def update
        company = Company.find_by(id: params[:id])
        if company
            company.update(company_params)
            render json: company, status: 204
        else
            render json: { error: "Company not found" }, status: 422
        end
    end

    def destroy
        company = Company.find_by(id: params[:id])
        if company
            company.destroy
            render json: {}, status: 200
        else
            render json: { error: "Company not found" }, status: 404
        end
    end

    private

    def company_params
        params.permit(
            :name,
            :address, 
            :country, 
            :industry, 
            :linkedin_url, 
            :website,
            :owner_id
            )
    end

end
