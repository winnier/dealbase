class ContactNoteSerializer < ActiveModel::Serializer
  attributes :id, :contact_name, :owner_name, :content, :created_at, :updated_at

  belongs_to :contact
end
