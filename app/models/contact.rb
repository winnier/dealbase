class Contact < ApplicationRecord
    has_many :contact_deals
    has_many :deals, through: :contact_deals
    belongs_to :company
    belongs_to :owner

    def company_info
        {id: company.id, name: company.name}
    end

    def owner_info
        {id: owner.id, name: owner.name}
    end
end
