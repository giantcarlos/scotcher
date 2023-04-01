class User < ApplicationRecord
    has_many :bottles
    has_many : distilleries, -> { distinct }, through: :bottles
end
