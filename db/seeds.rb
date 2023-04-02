# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


gian = User.create(username: "gian", email: "gianfakeemail@gmail.com", password: "1234")
salem = User.create(username: "salem", email: "salemfakeemail@gmail.com", password: "1234")

dalmore = Distillery.create(name: "Dalmore")
macallan = Distillery.create(name: "Macallan")
walker = Distillery.create(name: "Johnnie Walker")
suntory = Distillery.create(name: "Suntory")
grouse = Distillery.create(name: "Famous Grouse")
laphroaig = Distillery.create(name: "Laphroaig")
lagavulin = Distillery.create(name: "Lagavulin")
park = Distillery.create(name: "Higland Park")
cooley = Distillery.create(name: "Cooley")
macleod = Distillery.create(name: "Ian Macleod")
glenlivet = Distillery.create(name: "Glenlivet")
dewar = Distillery.create(name: "Dewar")

Bottle.create(distillery_id: dalmore.id, user_id: gian.id, name: "Dalmore Port Wood Reserve", origin: "Scotland(Highlands)", year: "non-aged statement", price: 92, rating: 91, image_url: "https://img.thewhiskyexchange.com/900/dlmob.non19.jpg")
Bottle.create(distillery_id: dalmore.id, user_id: gian.id, name: "Dalmore 12", origin: "Scotland(Highlands)", year: "12", price: 65, rating: 94, image_url: "https://img.thewhiskyexchange.com/900/dlmob.non19.jpg")
Bottle.create(distillery_id: macallan.id, user_id: gian.id, name: "Macallan 12 Double Cask", origin: "Scotland(Speyside)", year: "12", price: 70, rating: 95, image_url: "https://products0.imgix.drizly.com/ci-macallan-double-cask-12-year-a4ae339333522654.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20")
Bottle.create(distillery_id: macallan.id, user_id: gian.id, name: "Macallan 15 Double Cask", origin: "Scotland(Speyside)", year: "15", price: 150, rating: 92, image_url: "https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/1571/15854/Macallan-15-Year-Double-Cask__84578.1634657118.jpg?c=2")
Bottle.create(distillery_id: walker.id, user_id: gian.id, name: "Johnnie Walker Black", origin: "Scotland(Speyside)", year: "12", price: 32, rating: 70, image_url: "https://www.popswine.com/images/sites/popswine/labels/johnnie-walker-black-label-12-year-old-scotch-whiskey_1.jpg")
Bottle.create(distillery_id: walker.id, user_id: gian.id, name: "Johnnie Walker Red", origin: "Scotland(Speyside)", year: "non-aged statement", price: 23, rating: 55, image_url: "https://cdn.shopify.com/s/files/1/1048/8964/products/lp-wines-liquors-scotch-whisky-johnnie-walker-red-label-scotch-whisky-1l-28836503814227_1024x1024.jpg?v=1630867512")
Bottle.create(distillery_id: walker.id, user_id: gian.id, name: "Johnnie Walker White Walker", origin: "Scotland(Speyside)", year: "non-aged statement", price: 35, rating: 65, image_url: "https://cdn.shopify.com/s/files/1/0055/5125/9719/products/rSL000075.jpg?v=1678332244")
Bottle.create(distillery_id: suntory.id, user_id: gian.id, name: "Suntory Toki", origin: "Japan", year: "non-aged statement", price: 32, rating: 84, image_url: "https://cdn.shopify.com/s/files/1/0124/8792/products/Suntory_Toki_8944ed24-4466-4c62-81ed-b374ac9c6efa_1000x.jpg?v=1545798139")
Bottle.create(distillery_id: grouse.id, user_id: gian.id, name: "Naked Grouse", origin: "Scotland(Highlands)", year: "non-aged statement", price: 29, rating: 87, image_url: "https://cdn.shopify.com/s/files/1/0574/9899/2821/products/Naked_Grouse_Blended_Malt_Scotch_Whisky_LoveScotch_9.jpg?v=1654990794")
Bottle.create(distillery_id: laphroaig.id, user_id: gian.id, name: "Laphroaig 10", origin: "Scotland(Islay)", year: "10", price: 52, rating: 82, image_url: "https://cdn.shopify.com/s/files/1/1044/1362/products/a6b50c52da75315e14e9e07d3fe0517bd5202737_1024x1024.jpeg?v=1584666118")
Bottle.create(distillery_id: lagavulin.id, user_id: gian.id, name: "Lagavulin 16", origin: "Scotland(Islay)", year: "16", price: 90, rating: 83, image_url: "https://cdn11.bigcommerce.com/s-7a906/images/stencil/1280x1280/products/1552/1369/lagavulin-16-750__64722.1644511450.jpg?c=2")
Bottle.create(distillery_id: park.id, user_id: gian.id, name: "Highland Park 12", origin: "Scotland(The Islands)", year: "12", price: 50, rating: 69, image_url: "https://static.specsonline.com/wp-content/uploads/2020/11/081206602030.jpg")
Bottle.create(distillery_id: cooley.id, user_id: gian.id, name: "Connemara Original", origin: "Ireland", year: "12", price: 45, rating: 77, image_url: "https://cdn.shopify.com/s/files/1/0002/2459/1909/products/ConnemaraPeated_1024x1024.jpg?v=1571100145")
Bottle.create(distillery_id: macleod.id, user_id: gian.id, name: "The Feathery", origin: "Scotland(Highlands)", year: "non-aged statement", price: 30, rating: 85, image_url: "https://cdn.shopify.com/s/files/1/0050/2395/7103/products/vatted_fea1_eafc743c-2d5a-4366-9754-d407b23d4acc_700x.jpg?v=1611584060")
Bottle.create(distillery_id: glenlivet.id, user_id: gian.id, name: "Glenlivet 12", origin: "Scotland(Speyside)", year: "12", price: 49, rating: 80, image_url: "https://cdn.shopify.com/s/files/1/0124/8792/products/glenlivet12doubleoak_1000x.jpg?v=1615593663")
Bottle.create(distillery_id: dewar.id, user_id: gian.id, name: "Dewar's 15", origin: "Scotland(Highlands)", year: "15", price: 37, rating: 66, image_url: "https://sunsetcorners.com/wp-content/uploads/product_images/product-8585-1670292919-PREL0163.jpg")
