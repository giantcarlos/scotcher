class User < ApplicationRecord
    has_many :bottles
    has_many :distilleries, -> { distinct }, through: :bottles

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
end
