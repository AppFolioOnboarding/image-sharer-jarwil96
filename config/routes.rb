Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD


  root 'images#index'
  get '/tagged' => "images#tagged", as: :tagged
  resources :images
=======
  root 'application#home'
>>>>>>> afe3ae04a0c2bced0053d93ea781d4d31b354b6a

  resources :feedbacks, only: [:new]

  namespace :api do
    resource :feedbacks, only: [:create]
  end
end

