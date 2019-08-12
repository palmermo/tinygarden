class PlantsController < ApplicationController
  before_action :set_plant, only: [:show]
  def index
    @plants = Plant.all
  end

  def show
    respond_to do |format|
      format.html {}
      format.json { render json: @plant.to_json}
    end
  end

  private

  def set_plant
    @plant = Plant.find(params[:id])
  end
end
