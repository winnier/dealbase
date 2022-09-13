class SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token

        def create
            @user = User.find_by(username: session_params[:username])
        
            if @user && @user.authenticate(session_params[:password])
            login!
            render json: {
              logged_in: true,
              user: @user
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
              user: current_user
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
