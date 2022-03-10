class UserOrganisation < ApplicationRecord
  belongs_to :user
  belongs_to :organisation

  validates :user_id, presence: true
  validates :organisation_id, presence: true
end
