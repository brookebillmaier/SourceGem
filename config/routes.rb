Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/clients', to: 'clients#index'
  get '/clients/:id', to: 'clients#show'
  get '/clients', to: 'clients#create'
  get '/clients/:id', to: 'clients#delete'
  get '/clients/:id', to: 'clients#update'


end
