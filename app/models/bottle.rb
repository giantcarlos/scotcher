class Bottle < ApplicationRecord
  belongs_to :user
  belongs_to :distillery
end
