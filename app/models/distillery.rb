class Distillery < ApplicationRecord
    has_many :bottles
    has_many :users, through: :books
end
