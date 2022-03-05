Rails.application.routes.draw do
  resources :shifts, only:[:show, :index, :create, :update, :destroy]
  resources :users, only:[:show, :index, :create, :update]
  resources :organisations, only:[:show, :index, :create, :destroy, :update]
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
