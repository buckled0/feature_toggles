class Api::V1::FeatureToggle
  attr_reader :feature_toggle

  FEATURE_TEST_COOKIE_KEY = 'jp'

  def initialize(feature_toggle)
    @feature_toggle = feature_toggle
  end

  def canary_cookie
    if @feature_toggle.canary_deployment?
      rand(0..100) <= @feature_toggle.toggle_percentage.to_i ? "#{cookie_tag}-100" : "#{cookie_tag}-#{@feature_toggle.toggle_percentage}"
    end
  end

  private

  def cookie_tag
    "#{FEATURE_TEST_COOKIE_KEY}-#{@feature_toggle.name.split.map(&:chars).map(&:first).join.downcase}"
  end
end
