class ContactNote < ApplicationRecord
    belongs_to :contact
    belongs_to :owner

    def contact_name
       contact.name
    end
    def owner_name
        owner.name
    end

end
