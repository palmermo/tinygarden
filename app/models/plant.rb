class Plant < ApplicationRecord
  has_many :products, as: :sellable

  enum size: ['small', 'meduim', 'large']
end
