Rails.application.routes.draw do
  resources :user_organisations
  resources :shifts, only:[:show, :index, :create, :update, :destroy]
  resources :users, only:[:show, :create, :update]
  resources :organisations
  
  put "/reset", to: "users#update"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
