class User < ApplicationRecord
  has_many :shifts
  has_many :user_organisations
  has_many :organisations, through: :user_organisations

  has_secure_password
  
  validates :name, presence: true
  validates :password, presence: true, length:{minimum: 6, message: "minimum 6 characters"}, confirmation: true
  validates :password_confirmation, presence: true
  validates :email_address, presence: true, uniqueness:true
  
end
