class AddOrganisationIdToShift < ActiveRecord::Migration[6.1]
  def change
    add_column :shifts, :organisation_id, :integer, null:false, foreign_key: true
  end
end
