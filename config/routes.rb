Rails.application.routes.draw do
  match '/:name' => 'rooms#show', as: :room, via: :get
  resources :rooms, only: :create
  root to: 'pages#home'
end
