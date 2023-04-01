class CreateDistilleries < ActiveRecord::Migration[6.1]
  def change
    create_table :distilleries do |t|
      t.string :name

      t.timestamps
    end
  end
end
