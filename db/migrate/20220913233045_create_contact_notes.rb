class CreateContactNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_notes do |t|
      t.text :content
      t.integer :contact_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
