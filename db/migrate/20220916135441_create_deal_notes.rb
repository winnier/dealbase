class CreateDealNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :deal_notes do |t|
      t.text :content
      t.integer :deal_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
