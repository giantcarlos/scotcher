class Distillery < ApplicationRecord
    has_many :bottles
    has_many :users, through: :books

    validates :name, presence: true, uniqueness: true
    validates :image_url, presence: true
end
