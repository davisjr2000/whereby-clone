Rails.application.routes.draw do
  root to: 'pages#home'
  match '/:name' => 'rooms#show', as: :room, via: :get, name: /.*/
  resources :rooms, only: :create
end
