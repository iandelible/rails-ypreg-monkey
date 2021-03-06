class CreateLodgings < ActiveRecord::Migration
  def change
    create_table :lodgings do |t|
      t.string :name
      t.text :description
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state_abbrv
      t.integer :zipcode
      t.string :lodging_type
			t.references :locality, index: true
      t.integer :min_capacity
      t.integer :max_capacity
      t.references :contact_person, index: true
    end
  end
end
