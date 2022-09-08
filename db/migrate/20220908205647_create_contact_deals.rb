class CreateContactDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_deals do |t|
      t.integer :contact_id
      t.integer :deal_id
      t.integer :company_id

      t.timestamps
    end
  end
end
