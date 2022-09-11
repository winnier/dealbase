class AddCommentsToDeals < ActiveRecord::Migration[7.0]
  def change
    add_column :deals, :comments, :text
  end
end
