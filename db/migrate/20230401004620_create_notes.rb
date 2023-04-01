class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :comment
      t.references :bottle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
