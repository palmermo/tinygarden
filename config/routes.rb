Rails.application.routes.draw do
  root 'static_pages#landing'
  get '/oauth/callback', to: 'instagram#callback'
  get 'users/show'
  get '/design', to: 'static_pages#design', as: 'design'
  get '/care', to: 'static_pages#care', as: 'care'
  get '/cart', to: 'static_pages#cart', as: 'cart'
  devise_for :user

  resources :products, only: [:show, :index]
  resources :plants, only: [:show, :index]

  get 'hello_world', to: 'hello_world#index'
end
