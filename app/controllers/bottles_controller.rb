class BottlesController < ApplicationController

    def show
        bottle = current_user.bottles.find_by(id: params[:id])
        render json: bottle, status: :found
    end

    def index
        bottles = Bottle.all
        render json: bottles, status: :found
    end

    def create
        bottle = current_user.bottles.create!(bottle_params)
        render json: bottle, status: :created
    end

    def update
        book = current_user.books.find_by(id: params[:id])
        book.update!(book_params)
        render json: book
    end
    
    def destroy
        bottle = @current_user.bottles.find_by(id: params[:id])
        bottle.destroy
        head :no_content
    end
    
    private
        
    def bottle_params
        params.permit(:distillery_id, :name, :origin, :year, :price, :rating, :image_url)
    end

end
