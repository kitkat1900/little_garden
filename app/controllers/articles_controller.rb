class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :destroy]
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :redirect, only: [:edit, :destroy]

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

  def show
    @comments = @article.comments.includes(:user)
    @comment = Comment.new
    if @article.status_private? && @article.user != current_user
      redirect_to root_path
    end
  end

  def edit
 
  end

  def update
    if @article.update(article_params)
      redirect_to article_path
    else
      render :edit
    end
  end

  def destroy
    if @article.destroy
      redirect_to root_path
    end
  end

  private

  def article_params
    params.require(:article).permit(:article_name, :text, :category_id, :status, :image).merge(user_id: current_user.id)
  end

  def set_article
    @article = Article.find(params[:id])
  end

  def redirect
    unless current_user == @article.user
      redirect_to root_path
    end
  end
end
