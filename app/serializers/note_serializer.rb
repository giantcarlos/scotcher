class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :bottle
end
