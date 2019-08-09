Rails.application.routes.draw do
  root 'static_pages#landing'
  get '/design', to: 'static_pages#design', as: 'design'
  get '/care', to: 'static_pages#care', as: 'care'
  get '/cart', to: 'static_pages#cart', as: 'cart'
  devise_for :users

  resources :products, only: [:show, :index] do
    resources :plants, only: [:show, :index]
  end

  get 'hello_world', to: 'hello_world#index'
end
