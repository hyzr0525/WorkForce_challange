class Shift < ApplicationRecord
  belongs_to :user
  belongs_to :organisation

  validates :start, presence: true
  validates :finish, presence: true
  validates :break_length, presence: true
  validates :user_id, presence: true
  validates :organisation_id, presence: true
end
