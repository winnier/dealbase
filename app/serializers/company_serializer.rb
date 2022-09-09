class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :country, :industry, :linkedin_url, :website, :owner_id
end
