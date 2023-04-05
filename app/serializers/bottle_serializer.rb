class BottleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :year, :price, :rating, :image_url, :distillery_id, :distillery
  has_many :notes
end
