Rails.application.routes.draw do
  

  #Owner
  get '/owners', to: 'owners#index'
  get '/ownersnames', to: 'owners#shownames'
  post '/owners', to: 'owners#create'
  patch '/owners/:id', to: 'owners#update'
  delete '/owners/:id', to: 'owners#destroy'


  #Companies
  get '/companies', to: 'companies#index'
  get '/companies_names', to: 'companies#names'
  post '/companies', to: 'companies#create'
  patch '/companies/:id', to: 'companies#update'
  delete '/companies/:id', to: 'companies#destroy'


  #Contacts
  get '/contacts', to: 'contacts#index'
  get '/contacts/companies', to: 'contacts#showcompanies'
  get '/contacts/:id', to: 'contacts#show'
  post '/contacts', to: 'contacts#create'
  patch '/contacts/:id', to: 'contacts#update'
  delete '/contacts/:id', to: 'contacts#destroy'

  #Deals
  get '/deals', to: 'deals#index'
  post '/deals', to: 'deals#create'
  patch '/deals/:id', to: 'deals#update'
  delete '/deals/:id', to: 'deals#destroy'

  #Contact_Deals
  get '/contact_deals', to: 'contact_deals#index'
  post '/contact_deals', to: 'contact_deals#create'
  patch '/contact_deals/:id', to: 'contact_deals#update'
  delete '/contact_deals/:id', to: 'contact_deals#destroy'

  #Users
  post '/users', to: 'users#create'
  get '/users/:user_id', to: 'users#show' 
  get '/users', to: 'users#index'

  #Sessions Login/Logout
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

end
