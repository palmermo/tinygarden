class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
  end
end
