class CreateTableParasites < ActiveRecord::Migration[5.1]
  def change
    create_table :parasites do |t|
      t.date  :parasite_date
      t.integer :weight
      t.string  :product
      t.date  :next_date
      t.timestamps
    end
  end
end
