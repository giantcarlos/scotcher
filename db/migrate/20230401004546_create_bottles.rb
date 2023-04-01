class CreateBottles < ActiveRecord::Migration[6.1]
  def change
    create_table :bottles do |t|
      t.string :name
      t.string :origin
      t.integer :year
      t.integer :price
      t.integer :rating
      t.string :image_url
      t.references :user, null: false, foreign_key: true
      t.references :distillery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
