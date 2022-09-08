class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :address
      t.string :linked_in
      t.integer :company_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
