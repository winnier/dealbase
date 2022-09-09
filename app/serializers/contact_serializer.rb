class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :address, :linkedin_url, :company, :owner
end
