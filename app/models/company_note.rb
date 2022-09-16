class CompanyNote < ApplicationRecord
    belongs_to :company
    belongs_to :owner

    def company_name
       company.name
    end
    def owner_name
        owner.name
    end

end
