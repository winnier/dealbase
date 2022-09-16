class CompanyNotesController < ApplicationController
    
    def index
        company_notes = CompanyNote.all
        render json: company_notes
    end

    def show
        company_note = CompanyNote.find_by(id: params[:id])
        render json: company_note
    end

    def create
        company_note = CompanyNote.new(company_note_params)
        if company_note.save
            render json: company_note, status: 201
        else
            render json: {error: company_note.errors.full_messages}, status: 422
        end
    end

    private
    
    def company_note_params
        params.permit(
            :content,
            :company_id,
            :owner_id
        )
    end
end
