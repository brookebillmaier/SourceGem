# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# CREATE TABLE clients (id SERIAL, name text, industry text, slogan text, type TEXT, logo TEXT);


15.times do
  Client.create({
    "name" => "#{Faker::Company.name} #{Faker::Company.suffix}",
    "industry" => "#{Faker::Company.industry}",
    "slogan" => "#{Faker::Company.catch_phrase}",
    "type" => "#{Faker::Company.type}",
    "logo" => "#{Faker::Company.logo}"
    })
end

20.times do
  Client.create({
    "name" => "#{Faker::Company.name}",
    "industry" => "#{Faker::Company.industry}",
    "slogan" => "#{Faker::Company.catch_phrase}",
    "type" => "#{Faker::Company.type}",
    "logo" => "#{Faker::Company.logo}"
    })
end
p "database seeded!"
