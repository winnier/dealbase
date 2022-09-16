class DealNotesController < ApplicationController
    def index
        deal_notes = DealNote.all
        render json: deal_notes
    end
    def show
        deal_note = DealNote.find_by(id: params[:id])
        render json: deal_note
    end
    def create
        deal_note = DealNote.new(deal_note_params)
        if deal_note.save
            render json: deal_note, status: 201
        else
            render json: {error: deal_note.errors.full_messages}, status: 422
        end
    end

    private
    def deal_note_params
        params.permit(
            :content,
            :deal_id,
            :owner_id
        )
    end
end
