class AddCompanyIdToDeals < ActiveRecord::Migration[7.0]
  def change
    add_column :deals, :company_id, :integer
  end
end
