Rails.application.routes.draw do
  root to: 'site#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :feature_toggles, only: [:index, :new, :create, :edit, :toggle_type]
    end
  end
end
