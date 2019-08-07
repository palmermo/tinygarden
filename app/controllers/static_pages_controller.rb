class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
    @insta_feed = Instagram.client(:access_token => session[:access_token]).user_recent_media
  end
end
