class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comment, :bottle_id
end
