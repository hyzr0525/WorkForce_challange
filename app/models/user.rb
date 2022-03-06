class User < ApplicationRecord
  has_many :shifts
  belongs_to :organisation
  validates :name, uniqueness: true, presence: true
  validates :password_digest, presence: true, length:{minimum: 6, message: "minimum 6 characters"}
  validates :email_address, presence: true
end
