class BottleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :year, :price, :rating, :image_url, :distillery_id, :distilleries
  has_many :notes
end
