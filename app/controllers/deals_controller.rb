class DealsController < ApplicationController
    def index
        render json: Deal.all
    end

    def create
        deal = Deal.new(deal_params)
        if deal.save
            render json: deal, status: 201
        else
            render json: { errors: deal.errors.full_messages }, status: 422
        end
    end

    def update
        deal = Deal.find_by(id: params[:id])
        if deal
            deal.update(deal_params)
            render json: deal, status: 204
        else
            render json: { error: "Deal not found" }, status: 422
        end
    end

    def destroy
        deal = Deal.find_by(id: params[:id])
        if deal
            deal.destroy
            render json: {}, status: 200
        else
            render json: { error: "Deal not found" }, status: 404
        end
    end


    private

    def deal_params
        params.permit(
            :name,
            :product, 
            :value, 
            :stage, 
            :active, 
            :status,
            :company_id,
            :owner_id
            )
    end
end
