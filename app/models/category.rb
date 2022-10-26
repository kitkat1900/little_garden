class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '野菜' },
    { id: 2, name: '果物' },
    { id: 3, name: '花' },
    { id: 4, name: '草' },
    { id: 5, name: '観葉植物' },
    { id: 6, name: 'サボテン' },
    { id: 7, name: '多肉植物' },
    { id: 8, name: '樹木' },
    { id: 9, name: 'ハーブ' },
    { id: 10, name: 'キノコ' },
    { id: 11, name: 'その他' }
  ]

  include ActiveHash::Associations
  has_many :articles
end