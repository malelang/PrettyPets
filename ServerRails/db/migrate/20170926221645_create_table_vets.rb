class CreateTableVets < ActiveRecord::Migration[5.1]
  def change
    create_table :vets do |t|
      t.string  :name
      t.string  :adress
      t.string  :phone_number
      t.timestamps
    end
  end
end
