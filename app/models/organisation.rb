class Organisation < ApplicationRecord
    has_many :user_organisations, dependent: :destroy
    has_many :users, through: :user_organisations
    has_many :shifts, through: :users
    has_many :organisation_shifts, class_name: 'Shift'

    validates :name, presence: true
    validates :hourly_rate, presence: true
end
