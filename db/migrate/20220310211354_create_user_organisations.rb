class CreateUserOrganisations < ActiveRecord::Migration[6.1]
  def change
    create_table :user_organisations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :organisation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
