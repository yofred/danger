class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :name
      t.text :desc
      t.string :email
      t.string :budget
      t.string :company

      t.timestamps null: false
    end
  end
end
