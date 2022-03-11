class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email_address, :shifts
  has_many :user_organisations
  has_many :organisations

end
