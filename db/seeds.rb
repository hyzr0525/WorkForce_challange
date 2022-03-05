Organisation.destroy_all
User.destroy_all
Shift.destroy_all

puts "start seeding"
Organisation.create(name: "burger place", hourly_rate: "10")
Organisation.create(name: "pizza place", hourly_rate: "15")
puts "seeding User"
User.create(name: "Bob", email_address: "Bob@gmail.com", password: "password", organisation_id: Organisation.first.id)
puts "seeding shifts"
Shift.create(start: "2022-03-01 08:00:00", finish: "2022-03-01 10:00:00", break_length: 30, user_id: User.first.id)

puts "done seeding"