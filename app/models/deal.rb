class Deal < ApplicationRecord
    has_many :contact_deals
    has_many :deals, through: :contact_deals
    belongs_to :company
    belongs_to :owner
end
