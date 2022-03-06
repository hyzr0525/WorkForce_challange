class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email_address
  has_one :organisation
  has_many :shifts
end
