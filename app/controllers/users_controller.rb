class UsersController < ApplicationController
  before_action :set_user,   only: :show

  def show

  end

  private

  def set_user
    @user = User.find(params[:id])
    @articles = @user.articles.order(created_at: :desc)
    @categories = Category.all
  end
end
