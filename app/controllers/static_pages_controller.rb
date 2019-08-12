class StaticPagesController < ApplicationController
  before_action :login_instagram, only: [:landing]

  # def landing
  #   @plants = Plant.all
  #   @insta_feed = Instagram.client(:access_token => session[:access_token]).user_recent_media.shuffle.sample(4)
  # end

  def care
    @doctor = params[:doctor] == 'doctor'
  end

  def doctor
  end

  def design
  end

end
