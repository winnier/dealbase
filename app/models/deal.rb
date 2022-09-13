class Deal < ApplicationRecord
    has_many :contact_deals
    has_many :contacts, through: :contact_deals
    belongs_to :company
    belongs_to :owner

    def company_name
        company.name
    end

    def owner_name
        owner.name
    end



end

