class FeatureToggle
  include Mongoid::Document
  field :name, type: String
  field :toggle_status, type: String
  field :toggle_percentage, type: Integer
  field :inserted_at, type: DateTime, default: Time.now.getutc
  field :updated_at, type: DateTime, default: Time.now.getutc
end
