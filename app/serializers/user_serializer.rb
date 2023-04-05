class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :bottles
  has_many :distilleries, through: :bottles
end
