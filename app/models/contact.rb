class Contact < ApplicationRecord
    has_many :contact_deals
    has_many :deals, through: :contact_deals
    belongs_to :company
    belongs_to :user

    def company_name
        company.name
    end

    def owner_name
        user.name
    end
end
