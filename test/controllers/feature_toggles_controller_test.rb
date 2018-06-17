require 'test_helper'

class FeatureTogglesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feature_toggle = feature_toggles(:one)
  end

  test "should get index" do
    get feature_toggles_url
    assert_response :success
  end

  test "should get new" do
    get new_feature_toggle_url
    assert_response :success
  end

  test "should create feature_toggle" do
    assert_difference('FeatureToggle.count') do
      post feature_toggles_url, params: { feature_toggle: { name: @feature_toggle.name, toggle_percentage: @feature_toggle.toggle_percentage, toggle_status: @feature_toggle.toggle_status } }
    end

    assert_redirected_to feature_toggle_url(FeatureToggle.last)
  end

  test "should show feature_toggle" do
    get feature_toggle_url(@feature_toggle)
    assert_response :success
  end

  test "should get edit" do
    get edit_feature_toggle_url(@feature_toggle)
    assert_response :success
  end

  test "should update feature_toggle" do
    patch feature_toggle_url(@feature_toggle), params: { feature_toggle: { name: @feature_toggle.name, toggle_percentage: @feature_toggle.toggle_percentage, toggle_status: @feature_toggle.toggle_status } }
    assert_redirected_to feature_toggle_url(@feature_toggle)
  end

  test "should destroy feature_toggle" do
    assert_difference('FeatureToggle.count', -1) do
      delete feature_toggle_url(@feature_toggle)
    end

    assert_redirected_to feature_toggles_url
  end
end
