class Api::V1::FeatureTogglesController < Api::V1::BaseController
  before_action :set_feature_toggle, only: [:show, :edit, :update, :destroy]

  def index
    respond_with FeatureToggle.all
  end

  def show
  end

  def new
    @feature_toggle = FeatureToggle.new
  end

  def edit
  end

  def create
    @feature_toggle = FeatureToggle.new(feature_toggle_params)

    if @feature_toggle.save
      render json: @feature_toggle, status: :ok
    else
      render json: { message: @feature_toggle.errors, error_code: @feature_toggle.error_code }, status: :unprocessable_entity
    end
  end

  def update
      if @feature_toggle.update(feature_toggle_params)
        format.json { render :show, status: :ok, location: @feature_toggle }
      else
        format.json { render json: @feature_toggle.errors, status: :unprocessable_entity }
      end
  end

  def destroy
    @feature_toggle.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_feature_toggle
      @feature_toggle = FeatureToggle.find(params[:id])
    end

    def feature_toggle_params
      params.require(:feature_toggle).permit(:name, :toggle_status, :toggle_percentage)
    end
end
