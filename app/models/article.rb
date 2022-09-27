class Article < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  has_one_attached :image
  belongs_to :user

  enum status: { public: 0, private: 1 }, _prefix: true

  validates :article_name, length: { maximum: 20 }, presence: true
  validates :text, length: { maximum: 400 }, presence: true
  validates :category_id, numericality: { other_than: 1 } 
  validates :status, inclusion: { in: Article.statuses.keys }
  validates :image, presence: true
end
