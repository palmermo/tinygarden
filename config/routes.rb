Rails.application.routes.draw do
  resources :testers
  root 'static_pages#landing'
  get '/oauth/callback', to: 'instagram#callback'
  get 'users/show'
  get '/design', to: 'static_pages#design', as: 'design'
  get '/care', to: 'static_pages#care', as: 'care'
  get '/cart', to: 'static_pages#cart', as: 'cart'
  get '/admin', to: 'static_pages#admin', as: 'admin'
  get '/sellable/:product_id', to: 'products#sellables', as: 'sellable'
  devise_for :user

  resources :users, only: [:show]
  resources :products, only: [:show, :index, :create]
  resources :plants, only: [:show, :index, :create]
  resources :accessories, only: [:show, :index, :create]

  get '/admin/products', to: 'products#admin_products', as: 'admin_products'

  get 'hello_world', to: 'hello_world#index'
end
