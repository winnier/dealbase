class Company < ApplicationRecord
    has_many :deals
    has_many :contacts
    has_many :company_notes
    belongs_to :owner

    def contact_name
        self.contacts.map do |contact|
            contact.name
        end
    end

    def owner_name
        owner.name
    end

    def deal_name
        self.deals.map do |deal|
            deal.name
        deal.name
        end
    end
    def as_json(opts = {})
        hash = super
        hash[:company_notes] = company_notes
        hash
    end
end
