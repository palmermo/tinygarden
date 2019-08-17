
# user = User.create(
#   name: "izzy", email: "izzy@email.com", password: "password", admin: true
# )

Cart.create(
  user_id: user.id
)

Plant.destroy_all

Plant.create([
  {name: "Peppermint", size: 1,light: 2, maintenance: 1, category: 0, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Peppermint-300.jpg"},
  {name: "Rubber Plant", size: 2,light: 2, maintenance: 2, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Rubber_Plant-300.jpg"},
  {name: "Basil", size: 1,light: 2, maintenance: 1, category: 0, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Basil-300.jpg"},
  {name: "ZZ Plant", size: 2,light: 2, maintenance: 1, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/ZZ_Plant-300.jpg"},
  {name: "Snake Plant", size: 2,light: 1, maintenance: 1, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Snake_Plant-300.jpg"},
  {name: "Aloe", size: 1,light: 2, maintenance: 1, category: 0, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/aloe.png"},
  {name: "Rosemary", size: 1,light: 2, maintenance: 1, category: 0, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Rosemary-300.jpg"},
  {name: "Calathea", size: 2,light: 1, maintenance: 2, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Calathea-300.jpg"},
  {name: "Pothos", size: 2,light: 2, maintenance: 2, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Pothos-300.jpg"},
  {name: "Monstera", size: 2,light: 1, maintenance: 1, category: 1, description: "#", url: "http://tinygarden-bucket.herokuapp.com/images/Plants/Monstera-300.jpg"},
])

Product.destroy_all

Product.create([
  {sku: "pep1", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Peppermint').id, amount: rand(25) },
  {sku: "rub2", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Rubber Plant').id, amount: rand(25) },
  {sku: "bas3", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Basil').id, amount: rand(25) },
  {sku: "zzp4", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'ZZ Plant').id, amount: rand(25) },
  {sku: "sna5", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Snake Plant').id, amount: rand(25) },
  {sku: "alo6", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Aloe').id, amount: rand(25) },
  {sku: "ros7", price: 500, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Rosemary').id, amount: rand(25) },
  {sku: "cal8", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Calathea').id , amount: rand(25)},
  {sku: "pot9", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Pothos').id, amount: rand(25) },
  {sku: "mon10", price: 1000, sellable_type: "Plant", sellable_id: Plant.find_by(name: 'Monstera').id, amount: rand(25) }
])

# Product.all.sample(5).each{ |p| CartProduct.create( cart_id: user.cart.id, product_id: p.id , amount: 1 )}

Accessory.create([
  {name: 'chair', description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.", variant: [0,1,2].sample },
  {name: 'table', description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.", variant: [0,1,2].sample },
  {name: 'hanging thing', description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.", variant: [0,1,2].sample }
])

Product.create([
  {sku: "ch1", price: 4000, sellable_type: "Accessory", sellable_id: Accessory.find_by(name: 'chair').id, amount: rand(25) },
  {sku: "tab2", price: 10000, sellable_type: "Accessory", sellable_id: Accessory.find_by(name: 'table').id, amount: rand(25) },
  {sku: "thingy42", price: 3400, sellable_type: "Accessory", sellable_id: Accessory.find_by(name: 'hanging thing').id, amount: rand(25) }
])
