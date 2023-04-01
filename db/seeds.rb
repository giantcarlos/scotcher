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
hibiki = Distillery.create(name: "Hibiki")
grouse = Distillery.create(name: "Famous Grouse")
laphroaig = Distillery.create(name: "Laphroaig")
park = Distillery.create(name: "Higland Park")
cooley = Distillery.create(name: "Cooley")
macleod = Distillery.create(name: "Iam Macleod")

Bottle.create(distiller_id: dalmore.id, user_id: gian.id, name: "Dalmore")