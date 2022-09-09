class ContactDealsController < ApplicationController
    def index
        render json: ContactDeal.all
    end

    def create
        contact_deal = ContactDeal.new(contact_deal_params)
        if contact_deal.save
            render json: deal, status: 201
        else
            render json: { errors: contact_deal.errors.full_messages }, status: 422
        end
    end

    def update
        contact_deal = ContactDeal.find_by(id: params[:id])
        if contact_deal
            contact_deal.update(contact_deal_params)
            render json: contact_deal, status: 204
        else
            render json: { error: "ContactDeal not found" }, status: 422
        end
    end

    def destroy
        contact_deal = ContactDeal.find_by(id: params[:id])
        if contact_deal
            contact_deal.destroy
            render json: {}, status: 200
        else
            render json: { error: "ContactDeal not found" }, status: 404
        end
    end

    private

    def contact_deals_params
        params.permit(
            :contact_id,
            :deal_id, 
            :company_id
            )
    end
end
