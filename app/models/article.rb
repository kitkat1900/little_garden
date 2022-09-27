class Article < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  has_one_attached :image
  belongs_to :user

  enum status: { public: 0, private: 1 }, _prefix: true

  validates :text, :text, presence: true
  validates :category_id, numericality: { other_than: 1 } 
  validates :status, inclusion: { in: Article.statuses.keys }

  validates :category_id, numericality: { other_than: 1 , message: "can't be blank"}
end
