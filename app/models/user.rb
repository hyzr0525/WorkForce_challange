class User < ApplicationRecord
  has_many :shifts
  belongs_to :organisation

  has_secure_password
  
  validates :name, presence: true
  validates :password, presence: true, length:{minimum: 6, message: "minimum 6 characters"}
  validates :email_address, presence: true, uniqueness:true
end
