class OrganisationSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_rate
  has_many :user_organisations
  has_many :users
end
