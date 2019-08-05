class Product < ApplicationRecord
  belongs_to :sellabale, polymorphic: true
  # has_one :accessory, polymorphic: true

end
