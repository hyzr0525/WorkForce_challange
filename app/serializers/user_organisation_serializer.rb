class UserOrganisationSerializer < ActiveModel::Serializer
  attributes :id, :user, :organisation
  has_one :user
  has_one :organisation
end
