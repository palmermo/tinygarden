class Product < ApplicationRecord
  belongs_to :sellabale, polymorphic: true
end
