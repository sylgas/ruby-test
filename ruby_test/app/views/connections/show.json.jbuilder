json.array!(@connection) do |connection|
  json.extract! connection, :id, :initperson_id, :answerperson_id, :duration, :cdate
  json.url connection_url(connection, format: :json)
end
