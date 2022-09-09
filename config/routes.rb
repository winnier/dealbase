Rails.application.routes.draw do
  
  get '/owners', to: 'owners#index'
  post '/owners', to: 'owners#create'
  patch '/owners/:id', to: 'owners#update'
  delete '/owners/:id', to: 'owners#destroy'

  get '/companies', to: 'companies#index'
  get '/contacts', to: 'contacts#index'
  get '/deals', to: 'deals#index'
  
  
  get '/contact_deals', to: 'constact_deals#index'


end
