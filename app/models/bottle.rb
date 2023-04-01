class Bottle < ApplicationRecord
  belongs_to :user
  belongs_to :distillery
  has_many : notes
end
