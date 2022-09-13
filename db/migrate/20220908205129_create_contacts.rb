class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :address
      t.string :linkedin_url
      t.integer :company_id
      t.integer :user_id

      t.timestamps
    end
  end
end
