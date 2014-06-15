class CreateConnections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.integer :initperson_id
      t.integer :answerperson_id
      t.integer :duration
      t.date :cdate

      t.timestamps
    end
  end
end
