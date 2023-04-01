class Note < ApplicationRecord
  belongs_to :bottle

  validates :comment, presence: true
end
