class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.string :name
      t.string :product
      t.integer :value
      t.integer :stage
      t.boolean :active
      t.string :status

      t.timestamps
    end
  end
end
