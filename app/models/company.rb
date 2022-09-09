class Company < ApplicationRecord
    has_many :deals
    has_many :contacts
    belongs_to :owner
end
