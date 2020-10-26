class AddSessionTokenAndGeneratedTokenToRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :session_token, :string
    add_column :rooms, :generated_token, :string
  end
end
