class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
  end

  def care
  end

  def design 
  end

  def cart
    @cart_items = User.find(1).cart.cart_products.map(&:to_json)
  end
  
end
