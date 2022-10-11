class UsersController < ApplicationController
  before_action :set_user,   only: :show

  def show

  end

  private

  def set_user
    @user = User.find(params[:id])
    @articles = @user.articles.status_public.order(created_at: :desc)
    @unless_articles = Article.includes(:user).order('created_at DESC')
  end
end
