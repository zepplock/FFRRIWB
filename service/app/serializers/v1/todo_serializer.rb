module V1
  class TodoSerializer < ActiveModel::Serializer
    attributes :id, :body
  end
end

