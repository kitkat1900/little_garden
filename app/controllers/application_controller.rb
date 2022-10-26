class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_category


  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :profile, :image])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :profile, :image])
  end
  def set_category
    @categories = Category.all
  end
end
