class StaticPagesController < ApplicationController
  # before_action :authenticate_user!, only: [:cart]
  def landing
    @plants = Plant.all
  end

  def care
  end

  def design
  end

  def cart
    @cart_items = User.find(1).cart.products.map{ |s| s.sellable.attributes.merge({ price: s.price, sku: s.sku })  }
  end

end
