class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :article


  with_options presence: true do
    validates :text
    validates :user_id
    validates :article_id
  end
end
