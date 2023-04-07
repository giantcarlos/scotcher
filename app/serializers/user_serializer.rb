class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  def username
    object.username.capitalize
  end

end
