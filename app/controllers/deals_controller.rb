class DealsController < ApplicationController
    def index
        render json: Deal.all
    end
end
