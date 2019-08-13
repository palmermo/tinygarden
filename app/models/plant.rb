class Plant < ApplicationRecord
  has_one :products, as: :sellable
  has_many_attached :images

  enum size: ['small', 'meduim', 'large']
  enum light: ['low', 'partial', 'full']
  enum maintenance: ['easy', 'intermediate', 'hard']
  enum category: ['houseplant', 'herb']

  scope :by_size, -> (size) { where('size IN (?)', size) }
  scope :by_light, -> (light) { where('light IN (?)', light) }
  scope :by_maintenance, -> (maintenance) { where('maintenance IN (?)', maintenance) }
  scope :by_category, -> (category) { where('category IN (?)', category) }

  include Rails.application.routes.url_helpers
  def to_json(options={})
    imgs = self.images.count > 0 ? self.images.map{ |img| rails_blob_path( img, only_path: true ) } : ['http://www.placepuppy.net/200/200']
    {
      name: name,
      description: description,
      images: imgs,
      size: size,
      maintenance: maintenance,
      light: light,
      category: category,
      price: price,
      sku: sku,
    }
  end
end
