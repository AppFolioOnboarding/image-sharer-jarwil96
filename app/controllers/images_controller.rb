class ImagesController < ApplicationController
  def index
    @image = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def new
    @image = Image.new
  end

  def create
    img_params = params.require(:image).permit(:name, :url)
    @image = Image.new(img_params)
    if @image.save
      flash[:success] = 'successfully added image'
      render :show
    else
      render :new
    end
  end
end
