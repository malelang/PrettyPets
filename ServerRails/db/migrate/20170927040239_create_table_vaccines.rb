class CreateTableVaccines < ActiveRecord::Migration[5.1]
  def change
    create_table :vaccines do |t|
      t.date  :vaccine_date
      t.string  :illness
      t.string  :vet
      t.timestamps
    end
  end
end
