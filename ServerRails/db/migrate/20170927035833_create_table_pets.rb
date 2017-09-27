class CreateTablePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      
        t.string  :name
        t.string  :pet_type
        t.string  :race
        t.string  :sex
        t.integer :age
        t.timestamps
    end
  end
end
