class Todo < ActiveRecord::Base
  belongs_to :user

  validates :body, presence: true
  validates :user, presence: true

end
