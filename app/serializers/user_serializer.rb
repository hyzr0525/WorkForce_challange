class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email_address
  has_many :user_organisations
  has_many :organisations
  has_many :shifts
end
