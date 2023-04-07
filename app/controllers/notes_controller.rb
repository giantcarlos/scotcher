class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes, status: :found
    end

    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    def destroy
        note = Note.find_by(id: params[:id])
        note.destroy
        head :no_content
    end
    
    private
        
    def note_params
        params.permit(:bottle_id, :comment)
    end

end
