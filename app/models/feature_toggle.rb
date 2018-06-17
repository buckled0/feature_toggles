class FeatureToggle
  include Mongoid::Document
  field :name, type: String
  field :toggle_status, type: String
  field :toggle_percentage, type: Integer
end
