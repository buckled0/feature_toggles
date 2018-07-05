Rails.application.routes.draw do
  get '/admin/feature-toggles', to: 'site#index'
  scope :service do
    scope :features do
      namespace :api, defaults: { format: :json } do
        namespace :v1 do
          get '/feature_toggles/toggle-status', to: 'feature_toggles#toggle_status'
          resources :feature_toggles, only: [:index, :show, :create, :destroy, :update]
          get '/health-check', to: 'health_check#health_check'
        end
      end
    end
  end
end
