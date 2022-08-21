Rails.application.routes.draw do
  resource :pings, only: [:create]
  root to: 'pings#index'
end
