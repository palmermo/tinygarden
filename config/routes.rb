Rails.application.routes.draw do
  get 'users/show'
  root 'plants#show'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root 'users#index'
  # resources :users, only: [:new, :create, :edit, :destroy, :show]
  resources :products, only: [:show] do 
    resources :plants, only: [:show]
  end
end
