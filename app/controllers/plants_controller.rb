class PlantsController < ApplicationController
  before_action :set_plant, only: [:show]
  def index
    @filters = [ # TODO: need to get filter values from Model. Like: Plant.categories
      [
        { value: 0, label: 'small' },
        { value: 1, label: 'medium' },
        { value: 2, label: 'large' }
      ],
      [
        { value: 0, label: 'low' },
        { value: 1, label: 'partial' },
        { value: 2, label: 'full' }
      ],
      [
        { value: 0, label: 'easy' },
        { value: 1, label: 'intermediate' },
        { value: 2, label: 'hard' },
      ],
      [
        { value: 0, label: 'herb' },
        { value: 1, label: 'houseplant' },
      ]
    ]
    @plants = Plant.all
    @plants = @plants.by_size(params[:size]&.split(",")) if params[:size]&.split(",")&.any?
    @plants = @plants.by_light(params[:light]&.split(",")) if params[:light]&.split(",")&.any?
    @plants = @plants.by_maintenance(params[:maintenance]&.split(",")) if params[:maintenance]&.split(",")&.any?
    @plants = @plants.by_category(params[:category]&.split(",")) if params[:category]&.split(",")&.any?
    respond_to do |format|
      format.html {}
      format.json { render json: { plants: @plants } }
    end
  end

  def show
    respond_to do |format|
      format.html {}
      format.json { render json: @plant.to_json }
    end
  end

  def create
    @plant = Plant.new
  end

  private

  def set_plant
    @plant = Plant.find(params[:id])
  end

  def plants_params
    params.require(:plant).permit(:size, :light, :maintenance, :category, :description, :product_id)
  end
end
