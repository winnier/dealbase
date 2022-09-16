class DealNote < ApplicationRecord
    belongs_to  :deal
    belongs_to :owner

    def deal_name
        deal.name
    end

    def owner_name
        owner.name
    end
end
