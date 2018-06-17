Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :feature_toggles, only: [:index, :new, :create, :edit, :toggle_type]
    end
  end
end
