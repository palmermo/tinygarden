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
        { value: 0, label: 'houseplant' },
        { value: 1, label: 'herb' },
      ]
    ]
    has_params = params[:size] || params[:light] || params[:maintenance] || params[:category]
    plants_by_size = params[:size] && Plant.by_size(params[:size].split(','))
    plants_by_light = params[:light] && Plant.by_light(params[:light].split(','))
    plants_by_maintenance = params[:maintenance] && Plant.by_maintenance(params[:maintenance].split(','))
    plants_by_category = params[:category] && Plant.by_category(params[:category].split(','))
    @plants = Plant.all
    filtered_plants = [plants_by_size, plants_by_light, plants_by_maintenance, plants_by_category]
    .select { |plant| plant }
    .reduce { |acc, plant| acc & plant }
    @plants = has_params ? filtered_plants : Plant.all
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
