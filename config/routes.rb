Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :feature_toggles, only: [:index, :new, :create, :edit, :toggle_type]
    end
  end
end
