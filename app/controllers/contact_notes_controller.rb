class ContactNotesController < ApplicationController
    def index
        contact_notes = ContactNote.all
        render json: contact_notes
    end
    def show
        contact_note = ContactNote.find_by(id: params[:id])
        render json: contact_note
    end
    def create
        contact_note = ContactNote.new(contact_note_params)
        if contact_note.save
            render json: contact_note, status: 201
        else
            render json: {error: contact_note.errors.full_messages}, status: 422
        end
    end

    private

    def contact_note_params
        params.permit(
            :content,
            :contact_id,
            :owner_id
        )
    end
end
