class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
  end

  def care
  end

  def design 
  end

  def cart
    # render component: 'FirstComponent', props: { name: 'Jhon' }
    @cart_products = current_user.cart.products
    # @cart_props = { products: @user_cart }
    
    # if current_user
    # else
    #   redirect_to root_path
    # end
  end
  
end
