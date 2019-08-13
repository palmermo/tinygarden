class StaticPagesController < ApplicationController
  # before_action :login_instagram, only: [:landing]
  before_action :authenticate_user!, only: :admin
  layout "admin", only: :admin

  def landing
    @plants = Plant.all
    # @insta_feed = Instagram.client(:access_token => session[:access_token]).user_recent_media.shuffle.sample(4)
  end

  def care
  end

  def design
  end

  def cart
    @cart_items = current_user.cart.cart_products.map(&:to_json)
  end

  def admin
    if current_user.admin 
      @product = Product.new
    else 
      redirect_to root_path
    end
  end
end
