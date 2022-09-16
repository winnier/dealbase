class ContactDealsController < ApplicationController
    def index
        render json: ContactDeal.all
    end

    def show
        deal = Deal.find_by(id: params[:id])
        render json: deal.contacts
    end

    def create
        arr = params[:contact_id_array]
        deal = Deal.find(params[:deal_id])
        arr.each do |id|
            cd = ContactDeal.create!(deal_id: params[:deal_id], contact_id: id, company_id: params[:company_id])
        end
        render json: deal
        # contact_deal = ContactDeal.new(contact_deal_params)
        # if contact_deal.save
        #     render json: deal, status: 201
        # else
        #     render json: { errors: contact_deal.errors.full_messages }, status: 422
        # end
    end

    def create_with_deals
        deal = Deal.find_by(params[:deal_id])
        arr = params[:deal_id_array]
        arr.each do |id|
            cd = ContactDeal.create!(deal_id: id, contact_id: params[:contact_id], company_id: params[:company_id])
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

    # def contact_deals_params
    #     params.permit(
    #         :contact_id,
    #         :deal_id, 
    #         :company_id
    #         )
    # end
end