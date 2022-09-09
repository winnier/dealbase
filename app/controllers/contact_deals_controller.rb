class ContactDealsController < ApplicationController
    def index
        render json: ContactDeal.all
    end
end
