Rails.application.routes.draw do
  
  get '/owners', to: 'owners#index'
  get '/ownersnames', to: 'owners#shownames'
  post '/owners', to: 'owners#create'
  patch '/owners/:id', to: 'owners#update'
  delete '/owners/:id', to: 'owners#destroy'

  get '/companies', to: 'companies#index'
  get '/companies/:id', to: 'companies#show'
  get '/companies_names', to: 'companies#names'
  get '/companies/:id/contacts', to: 'companies#showcontacts'
  post '/companies', to: 'companies#create'
  patch '/companies/:id', to: 'companies#update'
  delete '/companies/:id', to: 'companies#destroy'
  get 'company/:id/deals', to: 'companies#show_deals'
  get 'company/:id/contacts', to: 'companies#show_all_contacts'

  get '/contacts', to: 'contacts#index'
  get '/contacts/companies', to: 'contacts#showcompanies' # this is used in ContactsPage
  get '/contacts/:id', to: 'contacts#show'
  post '/contacts', to: 'contacts#create'
  patch '/contacts/:id', to: 'contacts#update'
  delete '/contacts/:id', to: 'contacts#destroy'

  get '/deals', to: 'deals#index'
  get '/deals/companies', to: 'deals#show_companies' # this is used in DealsPage
  post '/deals', to: 'deals#create'
  get '/deals/:id', to: 'deals#show'
  patch '/deals/:id', to: 'deals#update'
  delete '/deals/:id', to: 'deals#destroy'

  get '/contact_deals', to: 'contact_deals#index'
  post '/contact_deals', to: 'contact_deals#create'
  patch '/contact_deals/:id', to: 'contact_deals#update'
  delete '/contact_deals/:id', to: 'contact_deals#destroy'

  get '/contact_notes', to: 'contact_notes#index'
  get '/contact_notes/:id', to: 'contact_notes#show'
  post '/contact_notes', to: 'contact_notes#create'
  get '/contact/:id/deals', to: 'contact_deals#show'

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get '/contact_to/:id/deals', to: 'contacts#associated_deals'

end
