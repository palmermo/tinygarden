class StaticPagesController < ApplicationController
  def landing
    @plants = Plant.all
  end

  def care
  end

  def design 
  end
  
end
