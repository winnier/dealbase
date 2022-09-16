class DealNoteSerializer < ActiveModel::Serializer
  attributes :id, :deal_name, :owner_name, :content, :created_at, :updated_at

  belongs_to :deal
end
