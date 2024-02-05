const starWarsPeople = require('./controllers/starWarsPeople')

module.exports = {
  createStarWarsPerson: starWarsPeople.createStarWarsPerson,
  getStarWarsPerson: starWarsPeople.getStarWarsPerson
}
