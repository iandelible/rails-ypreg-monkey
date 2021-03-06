class CreateLocalities < ActiveRecord::Migration
  def change
    create_table :localities do |t|
      t.string :city
      t.string :state_abbrv
      t.references :contact, index: true
			t.references :lodging_contact, index: true

      t.timestamps
    end
  end
end
