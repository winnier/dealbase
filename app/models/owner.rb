class Owner < ApplicationRecord
    has_many :contacts
    has_many :deals
    has_many :companies
    has_many :contact_notes
end
