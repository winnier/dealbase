class OwnersController < ApplicationController
    def index
        render json: Owner.all
    end

    def create
        owner = Owner.new(owner_params)
        if owner.save
            render json: owner, status: 201
        else
            render json: { errors: owner.errors.full_messages }, status: 422
        end
    end

    private

    def owner_params
        params.permit(:name, :email, :username, :password_digest)
    end
end
