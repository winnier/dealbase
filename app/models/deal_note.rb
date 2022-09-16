class DealNote < ApplicationRecord
    belongs_to  :deal
    belongs_to :owner
end
