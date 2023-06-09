class DistilleriesController < ApplicationController

    def index
        distilleries = current_user.distilleries.all.order(:name)
        render json: distilleries, status: :found
    end
    
    def all
        distilleries = Distillery.all.order(:name)
        render json: distilleries, status: :found
    end

    def create
        distillery = Distillery.create!(distillery_params)
        render json: distillery, status: :created
    end
    
    private
    
    def distillery_params
        params.permit(:name)
    end

end
