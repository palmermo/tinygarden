class Plant < ApplicationRecord
  has_many :products, as: :sellable
  has_many_attached :images

  enum size: ['small', 'meduim', 'large']
end
