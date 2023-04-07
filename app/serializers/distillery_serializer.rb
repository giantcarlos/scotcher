class DistillerySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :bottles
end
