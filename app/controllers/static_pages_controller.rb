class StaticPagesController < ApplicationController
  # before_action :login_instagram, only: [:landing]
  before_action :authenticate_user!, only: :admin
  layout "admin", only: :admin

  def landing
    @plants = Plant.limit(8)
    # @insta_feed = Instagram.client(:access_token => session[:access_token]).user_recent_media.shuffle.sample(4)
  end

  def care
    @doctor = params[:doctor] == 'doctor'
  end

  def doctor
  end

  def design
  end

  def cart
    @cart_items = User.first.cart.cart_products.map(&:to_json)
  end

  def admin
    if current_user.admin 
      @product = Product.new
    else 
      redirect_to root_path
    end
  end
end
