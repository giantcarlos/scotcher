class BottleSerializer < ActiveModel::Serializer
  attributes :id, :name, :origin, :year, :price, :rating, :image_url, :distillery_id
  has_many :notes
  belongs_to :distillery
end
