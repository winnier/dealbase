Rails.application.routes.draw do
  
  get '/owners', to: 'owners#index'


  get '/contacts', to: 'contacts#index'

end
