class Api::V1::FeatureToggle
  attr_reader :feature_toggle

  def initialize(feature_toggle)
    @feature_toggle = feature_toggle
  end

  def canary_cookie
    if canary_deployment?
      
    end
  end

  private

  def canary_deployment?
    if @feature_toggle.toggle_status.eql? 'amber'
      rand(0..100) > @feature_toggle.toggle_percentage.to_i
    else
      false
    end
  end
end
