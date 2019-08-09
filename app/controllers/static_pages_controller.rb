class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
  end

  def care
  end

  def design 
  end

  def cart
    @product = Product.all
    
    if current_user
      @user_cart = current_user.cart.products
    else
      redirect_to root_path
    end
  end
  
end
