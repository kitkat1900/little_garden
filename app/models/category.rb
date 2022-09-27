class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: '野菜' },
    { id: 3, name: '果物' },
    { id: 4, name: '花' },
    { id: 5, name: '草' },
    { id: 6, name: '観葉植物' },
    { id: 7, name: 'サボテン' },
    { id: 8, name: '多肉植物' },
    { id: 9, name: '樹木' },
    { id: 10, name: 'ハーブ' },
    { id: 11, name: 'キノコ' },
    { id: 12, name: 'その他' }
  ]

  include ActiveHash::Associations
  has_many :articles
end