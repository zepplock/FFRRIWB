class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|

      t.text :body
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
