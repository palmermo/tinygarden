class User < ApplicationRecord
  has_many :reviews
  has_one_attached :image
  has_and_belongs_to_many :products
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable
end
