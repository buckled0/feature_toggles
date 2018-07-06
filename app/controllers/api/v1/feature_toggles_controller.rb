class Api::V1::FeatureTogglesController < Api::V1::BaseController
  before_action :set_feature_toggle, only: [:show, :edit, :update, :destroy]

  def index
    respond_with FeatureToggle.all
  end

  def show
    respond_with @feature_toggle
  end

  def new
    @feature_toggle = FeatureToggle.new
  end

  def edit
  end

  def create
    @feature_toggle = FeatureToggle.new(feature_toggle_params)

    if @feature_toggle.save
      respond_with @feature_toggle, json: @feature_toggle, status: :ok
    else
      respond_with @feature_toggle.errors, json: @feature_toggle.errors, status: :unprocessable_entity
    end
  end

  def update
      @feature_toggle.update_attributes(feature_toggle_params)
      @feature_toggle.updated_at = Time.now
      @feature_toggle.save
      respond_with @feature_toggle, json: @feature_toggle
  end

  def destroy
    respond_with @feature_toggle.destroy, json: { message: 'Toggle deleted' }, status: :ok
  end

  def toggle_status
    @feature_toggle = FeatureToggle.find_by(name: params[:name])

    if @feature_toggle.present?
      feature = Api::V1::CanaryDeployment.new(@feature_toggle)
      feature_toggle = { feature_toggle: { toggle_status: @feature_toggle.toggle_status, toggle_percentage: @feature_toggle.toggle_percentage, cookie: feature.canary_cookie } }
      respond_with feature_toggle
    else
      respond_with error: { message: 'Toggle not found' }, status: 500
    end
  end

  private
  def set_feature_toggle
    @feature_toggle = FeatureToggle.find(params[:id])
  end

  def feature_toggle_params
    params.require(:feature_toggle).permit(:id, :name, :toggle_status, :toggle_percentage)
  end
end
