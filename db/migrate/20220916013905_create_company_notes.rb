class CreateCompanyNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :company_notes do |t|
      t.text :content
      t.integer :company_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
