class Owner < ApplicationRecord
    has_many :contacts
    has_many :deals
    has_many :companies
end
