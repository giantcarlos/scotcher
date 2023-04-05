class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :distilleries_user_bottles
  has_many :bottles

  def username
    object.username.capitalize
  end

  def distilleries_user_bottles
    adjusted_distilleries = object.distilleries.map do |d| 
      nd = {}
      nd[:name] = d.name
      nd[:id] = d.id
      nd[:bottles] = d.bottles.select {|b| b.user_id==object.id}
      nd
    end
    adjusted_distilleries
  end

end
