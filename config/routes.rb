Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'images#index'
  get 'images/index' => 'images#index'
  get 'images/:id/show' => 'images#show'
  get 'images/new' => 'images#new'
  get '/tagged' => "images#tagged", as: :tagged
  resources :images
end
