class BottleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :year, :price, :rating, :image_url
  has_one :user
  has_one :distillery
end
