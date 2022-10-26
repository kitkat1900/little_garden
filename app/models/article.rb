class Article < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  has_one_attached :image
  belongs_to :user
  has_many :comments

  enum status: { public: 0, private: 1 }, _prefix: true

  validates :article_name, length: { maximum: 20 }, presence: true
  validates :text, length: { maximum: 400 }, presence: true
  validates :category_id, numericality: { greater_than_or_equal_to:1 ,less_than_or_equal_to:11, message: "を選んでください" }
  validates :status, inclusion: { in: Article.statuses.keys }
  validates :image, presence: true
end
