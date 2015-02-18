json.array!(@emails) do |email|
  json.extract! email, :id, :name, :desc, :email, :budget, :company
  json.url email_url(email, format: :json)
end
