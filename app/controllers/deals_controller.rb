class DealsController < ApplicationController
    def index
        render json: Deal.all
    end

    def show
        deal = Deal.find_by(id: params[:id])
        render json: deal
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
            deal.update!(deal_params)
            render json: deal, status: 201
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

    def show_companies
        deals = Deal.all
        names = []
        deals.each {|deal| names.push(deal.company.name)}
        render json: names.uniq
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
            # :company_name,
            # :owner_name
            # :comments #alternatively I can add a seprate comments table, that way we can have 
            # multiple comments per deal, I will ask on Monday, we can dump some of these changes
            )
    end
end
