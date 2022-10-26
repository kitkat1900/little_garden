class CategoriesController < ApplicationController
  #before_action :set_category, only: :show
  
  def index
    @categories = Category.all
    @category = Category.find(params[:format])
    @articles = @category.articles.order(created_at: :desc)
  end

  def show
  
    @categories = Category.all
    @category = Category.find(params[:format])
    @articles = @category.articles.order(created_at: :desc)
 
  end

  private

  #def set_category
    #@categories = Category.find(params[:id])
  #end
end
