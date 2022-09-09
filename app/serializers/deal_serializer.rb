class DealSerializer < ActiveModel::Serializer
  attributes :id, :name, :product, :value, :stage, :active, :status, :company_id, :owner_id
end
