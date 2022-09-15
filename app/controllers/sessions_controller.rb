class SessionsController < ApplicationController

        def create
            @owner = Owner.find_by(username: params[:username])
            if @owner && @owner.authenticate(params[:password])
            login!
            render json: {
              logged_in: true,
              owner: @owner
            }
            else
            render json: { 
              status: 401,
              errors: ['no such user, please try again']
            }
            end
        end


        def is_logged_in?
            if logged_in? && current_user
            render json: {
              logged_in: true,
              owner: current_user
            }
            else
            render json: {
              logged_in: false,
              message: 'no such user'
            }
            end
        end

        def destroy
            logout!
            render json: {
              status: 200,
              logged_out: true
            }
        end

        # def index
        #     session[:session_hello] ||= 'World'
        #     cookies[:cookies_hello] ||= 'World'
        #     render json: { session: session, cookies: cookies.to_hash }
        # end

    private

        def session_params
            params.permit(:username, :password)
        end

end

