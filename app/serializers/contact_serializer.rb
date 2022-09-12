class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :address, :linkedin_url, :company_name, :owner_name
end
