class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :country
      t.string :industry
      t.string :linkedin_url
      t.string :website
      t.integer :user_id

      t.timestamps
    end
  end
end
