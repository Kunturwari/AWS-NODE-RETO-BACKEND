const response = require('../utils/response')
const translateSwapiPerson = require('../utils/translate')

const BASE_URL = 'https://swapi.py4e.com/api/'

const getSwapiPerson = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/people/${id}`)
    const swapiPerson = await res.json()
    if (res.status === 404) {
      return response(404, { message: 'Character not found' })
    }

    const person = translateSwapiPerson(swapiPerson)
    return response(200, person)
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = getSwapiPerson
