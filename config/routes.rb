Rails.application.routes.draw do
  get 'design_pages/index'
  get 'care_pages/index'
  root 'static_pages#landing'
  get 'users/show'
  devise_for :users

  resources :products, only: [:show, :index] do 
    resources :plants, only: [:show, :index]
  end
  
  get 'hello_world', to: 'hello_world#index'
end
