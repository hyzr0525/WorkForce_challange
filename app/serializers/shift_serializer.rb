class ShiftSerializer < ActiveModel::Serializer
  attributes :id, :start, :finish, :break_length, :user_id
  has_one :user
end
