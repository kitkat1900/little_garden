class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :destroy]

  def index
    @articles = Article.status_public.order(created_at: :desc)
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
  
    if @article.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def article_params
    params.require(:article).permit(:article_name, :text, :category_id, :status, :image).merge(user_id: current_user.id)
  end
end
