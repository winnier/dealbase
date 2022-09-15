class Owner < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true

    has_many :contacts
    has_many :deals
    has_many :companies
    has_many :contact_notes
end
