class ContactDealSerializer < ActiveModel::Serializer
  attributes :id, :deal_id, :contact_id
  # contact_id, :deal_id, :company_id
end
