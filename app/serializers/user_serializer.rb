class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email_address, :password
  has_one :organisation
  has_many :shifts
end
