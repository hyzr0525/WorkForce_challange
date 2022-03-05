class OrganisationSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_rate
  has_many :users
end
