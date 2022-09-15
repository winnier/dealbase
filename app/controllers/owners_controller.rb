class OwnersController < ApplicationController

    def index
        @owners = Owner.all
        if @owners
            render json: {
            owners: @owners
            }
        else
            render json: {
                status: 500,
                errors: ['No users found']
            }
        end
    end

    def show
        @owner = Owner.find_by!(params[:id])
         if @owner
            render json: {
            owner: @owner
            }
         else 
            render json: {
            status: 500,
            erros: ['User not found']
            }
         end
    end

    def create
        @owner = Owner.new(user_params)
        if @owner.save
            login!
            render json: {
            status: :created,
            owner: @owner
            }
        else
            render json: {
            status: 500,
            errors: @owner.errors.full_messages
            }
        end
    end

    private

    def user_params
        params.require(:owner).permit(:username, :password, :password_confirmation)
    end

end
