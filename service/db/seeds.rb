require 'faker'

EMAILS = ['admin@example.com', 'user1@example.com', 'user2@example.com']

EMAILS.each do |email|
  User.create(email: email, username: Faker::Internet.user_name, password: 'password')
end

10.times do
  Story.create(title: Faker::Lorem.sentence(1), body: Faker::Lorem.paragraph(30 + rand(70)), user: User.all.sample)
end

10.times do
  Todo.create(body: Faker::Lorem.sentence(1), user: User.all.sample)
end
