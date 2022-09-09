class OwnersController < ApplicationController
    def index
        render json: Owner.all
    end
end
