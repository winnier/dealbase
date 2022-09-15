class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!, :set_user

def login!
    session[:owner_id] = @owner.id
end

def logged_in?
    !!session[:owner_id]
end

def current_user
    @current_user ||= Owner.find(session[:owner_id]) if session[:user_id]
end

def authorized_user?
    @owner == current_user
end

def logout!
    session.clear
end

def set_user
    @owner = Owner.find_by!(id: session[owner.id])
end
end
