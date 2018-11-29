Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/clients', to: 'clients#index'
  get '/clients/:id', to: 'clients#show'
  post '/clients', to: 'clients#create'
  delete '/clients/:id', to: 'clients#delete'
  put '/clients/:id', to: 'clients#update'


end
