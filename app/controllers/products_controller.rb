class ProductsController < ApplicationController
  def index
    @plants = Plant.all
  end

  def show
    @plants = Plant.all
  end
end
