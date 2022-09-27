class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '1.---' },
    { id: 2, name: '2.野菜' },
    { id: 3, name: '3.果物' },
    { id: 4, name: '4.花' },
    { id: 5, name: '5.草' },
    { id: 6, name: '6.観葉植物' },
    { id: 7, name: '7.サボテン' },
    { id: 8, name: '8.多肉植物' },
    { id: 9, name: '9.樹木' },
    { id: 10, name: '10.ハーブ' },
    { id: 11, name: '11.キノコ' },
    { id: 12, name: '12.その他' }
  ]

  include ActiveHash::Associations
  has_many :articles
end