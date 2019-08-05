# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


15.times do |x|
  Plant.create(
    name: Faker::Games::Pokemon.name, 
    light: [0,1,2][x % 3], 
    size: [0,1,2][x % 3],
    maintenance: [0,1,2][x % 3],
    category: [0,1,2][x % 3],
    description: Faker::Quotes::Shakespeare.hamlet_quote
  )
end


Plant.create([
  {},
  {},
  {}
])
end

