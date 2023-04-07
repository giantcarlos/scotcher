class Bottle < ApplicationRecord
  belongs_to :user
  belongs_to :distillery
  has_many :notes, dependent: :destroy

  validates :name, presence: true
  validates :origin, presence: true
  validates :year, presence: true
  validates :price, presence: true
  validates :rating, presence: true
  validates :image_url, presence: true
end
