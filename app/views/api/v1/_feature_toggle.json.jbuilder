json.extract! feature_toggle, :id, :name, :toggle_status, :toggle_percentage, :created_at, :updated_at
json.url feature_toggle_url(feature_toggle, format: :json)
