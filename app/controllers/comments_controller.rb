class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @article = Article.find(params[:article_id])
    if @comment.save

      @image = url_for(@comment.user.image)
      @time = l @comment.created_at, format: :long
      @path = user_path(@comment.user.id)
      @delete = article_comment_path(@comment.article.id, @comment.id)
      CommentChannel.broadcast_to @article, { comment: @comment, user: @comment.user, time: @time, path: @path, delete: @delete, image: @image }
    end
  end

  def destroy
    @article = Article.find(params[:article_id])
    comment = Comment.find_by(id: params[:id], article_id: params[:article_id])
    if current_user.id == comment.user.id || current_user.id == @article.user.id
      comment.destroy

      redirect_to article_path(params[:article_id], anchor: "article-show-comments")

    else
      render 'article/show'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, article_id: params[:article_id])
  end
end
