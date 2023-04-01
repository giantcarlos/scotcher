class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :not_valid
  rescue_from ActiveRecord::RecordNotFound, with: :no_route

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def not_valid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def no_route
    render json: {error: "Not found"}, status: :not_found
  end


end
