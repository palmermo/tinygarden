class ProductsController < ApplicationController
  layout "admin", only: [:sellables, :admin_products, :update, :edit, :create, :destroy]

  def index
    @plants = Plant.all
  end

  def show
    @plants = Plant.all
  end

  # Admin actions
  def create
    @product = Product.new(product_params)
    respond_to do |format|
      if @product.save
        format.html { redirect_to sellable_path(@product), notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def sellables
    @plant = Plant.new
    @accessory = Accessory.new
    @product = Product.find(params[:product_id])
  end

  def admin_products
    @products = Product.all
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_back(fallback_location: admin_path)
  end

  private

  def product_params
    prams.require(:product).permit(:sku, :price)
  end
end
