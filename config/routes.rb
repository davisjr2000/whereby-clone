Rails.application.routes.draw do
  match '/:name' => 'rooms#show', as: :room, via: :get
  root to: 'pages#home'
end
