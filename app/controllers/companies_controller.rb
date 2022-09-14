class CompaniesController < ApplicationController
    def index
        companies = Company.all
        render json: companies
    end

    def names
        companies = Company.all
        names = companies.pluck(:name)
        render json: names
    end

    def create
        company = Contact.new(company_params)
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
            :user_id
            )
    end

end
