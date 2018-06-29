class Api::V1::HealthCheckController < ApplicationController
  def health_check
    render plain: 'ok'
  end
end
