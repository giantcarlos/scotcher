class BottlesController < ApplicationController

    def show
        bottle = current_user.bottles.find_by(id: params[:id])
        render json: bottle, status: :found
    end

    def index
        bottles = current_user.bottles.all
        render json: bottles, status: :found
    end

    def create
        bottle = current_user.bottles.create!(bottle_params)
        render json: bottle, status: :created
    end

    def update
        bottle = current_user.bottles.find_by(id: params[:id])
        bottle.update!(bottle_params)
        render json: bottle
    end
    
    def destroy
        bottle = current_user.bottles.find_by(id: params[:id])
        bottle.destroy
        head :no_content
    end
    
    private
        
    def bottle_params
        params.permit(:distillery_id, :name, :origin, :year, :price, :rating, :image_url)
    end

end
