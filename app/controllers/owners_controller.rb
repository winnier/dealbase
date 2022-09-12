class OwnersController < ApplicationController
    def index
        render json: Owner.all
    end

    def shownames
        owners = Owner.all.pluck(:name)
        render json: owners
    end

    def create
        owner = Owner.new(owner_params)
        if owner.save
            render json: owner, status: 201
        else
            render json: { errors: owner.errors.full_messages }, status: 422
        end
    end

    def update
        owner = Owner.find_by(id: params[:id])
        if owner
            owner.update(owner_params)
            render json: owner, status: 204
        else
            render json: { error: "Owner not found" }, status: 422
        end
    end

    def destroy
        owner = Owner.find_by(id: params[:id])
        if owner
            owner.destroy
            render json: {}, status: 200
        else
            render json: { error: "Owner not found" }, status: 404
        end
    end

    private

    def owner_params
        params.permit(:name, :email, :username, :password_digest)
    end
end
