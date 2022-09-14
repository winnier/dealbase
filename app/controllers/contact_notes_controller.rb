class ContactNotesController < ApplicationController
    def index
        contact_notes = ContactNote.all
        render json: contact_notes
    end
    def show
        contact_note = ContactNote.find_by(id: params[:id])
        render json: contact_note
    end
    # def create
    #     contact_note = ContactNote.new(content: params[:content], contact_id: params[:contact_id], owner_id: params[:owner_id])
    #     if contact_note.save
    #         render json: {id: contact_note.id, content: contact_note.content,}
    #     else
    #     end
    # end
end
