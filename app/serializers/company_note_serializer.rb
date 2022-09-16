class CompanyNoteSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :owner_name, :content, :created_at, :updated_at

  belongs_to :company
end
