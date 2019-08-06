Rails.application.routes.draw do
  root 'static_pages#landing'
  get 'users/show'
  devise_for :users
  
  resources :products, only: [:show] do 
    resources :plants, only: [:show]
  end
end
