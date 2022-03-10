class RemoveOrganisationIdFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :organisation_id, :integer
  end
end
