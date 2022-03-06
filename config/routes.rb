Rails.application.routes.draw do
  resources :shifts
  resources :users, only:[:show, :create, :update]
  resources :organisations
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
