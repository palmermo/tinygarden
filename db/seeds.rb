User.destroy_all

user = User.create(
  name: "izzy", email: "izzy@email.com", password: "password"
)

Cart.create(
  user_id: user.id
)

Plant.destroy_all

Plant.create([
  {name: "Peppermint", size: 1,light: 3, maintenance: 1, category: 1, description: "#"},
  {name: "Rubber Plant", size: 2,light: 2, maintenance: 2, category: 2, description: "#"},
  {name: "Basil", size: 1,light: 3, maintenance: 1, category: 1, description: "#"},
  {name: "ZZ Plant", size: 2,light: 2, maintenance: 1, category: 2, description: "#"},
  {name: "Snake Plant", size: 2,light: 1, maintenance: 1, category: 2, description: "#"},
  {name: "Aloe", size: 1,light: 3, maintenance: 1, category: 1, description: "#"},
  {name: "Rosemary", size: 1,light: 3, maintenance: 1, category: 1, description: "#"},
  {name: "Calathea", size: 2,light: 1, maintenance: 2, category: 2, description: "#"},
  {name: "Pothos", size: 2,light: 2, maintenance: 2, category: 2, description: "#"},
  {name: "Monstera", size: 2,light: 1, maintenance: 1, category: 2, description: "#"},
])

Product.destroy_all

Product.create([
  {sku: "pep1", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Peppermint').id },
  {sku: "rub2", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Rubber Plant').id },
  {sku: "bas3", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Basil').id },
  {sku: "zzp4", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'ZZ Plant').id },
  {sku: "sna5", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Snake Plant').id },
  {sku: "alo6", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Aloe').id },
  {sku: "ros7", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Rosemary').id },
  {sku: "cal8", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Calathea').id },
  {sku: "pot9", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Pothos').id },
  {sku: "mon10", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Monstera').id }
])

Product.all.sample(5).each {|p| user.cart.products << p }
