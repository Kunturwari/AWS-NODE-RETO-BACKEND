/* eslint-disable camelcase */
const StarWarsPeson = require('../models/starWarsPerson')
const getSwapiPerson = require('../swapi/swapi')
const response = require('../utils/response')

const createStarWarsPerson = async (event) => {
  const starWarsPerson = JSON.parse(event.body)
  const { swapi_url } = starWarsPerson

  try {
    if (swapi_url === undefined) {
      return response(400, { error: 'Missing attribute "swapi_url"' })
    }

    const id = swapi_url.split('/')[5]
    const newStarWarsPerson = await StarWarsPeson.create({ id, ...starWarsPerson })
    return response(201, newStarWarsPerson)
  } catch (error) {
    return response(500, { error: 'Could not create a Star Wars character' })
  }
}

const getStarWarsPerson = async (event) => {
  const { id } = event.pathParameters

  try {
    const myStarWarsPerson = await StarWarsPeson.get(id)
    if (myStarWarsPerson) {
      return response(200, myStarWarsPerson)
    }

    const swapiPerson = await getSwapiPerson(id)
    return swapiPerson
  } catch (error) {
    return response(500, { error: 'there was a problem to retrieve the Star Wars character' })
  }
}

module.exports = {
  createStarWarsPerson,
  getStarWarsPerson
}
