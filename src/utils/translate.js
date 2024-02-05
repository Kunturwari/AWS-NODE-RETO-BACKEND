const translate = {
  name: 'nombre',
  height: 'altura',
  mass: 'masa',
  hair_color: 'color_pelo',
  skin_color: 'color_piel',
  eye_color: 'color_ojos',
  birth_year: 'anho_nacimiento',
  gender: 'genero',
  homeworld: 'mundo',
  films: 'peliculas',
  species: 'especies',
  vehicles: 'vehiculos',
  starships: 'naves_estelares',
  created: 'creado',
  edited: 'editado',
  url: 'swapi_url'
}

const translateSwapiPerson = (swapiPerson) => {
  const translatedSwapiPerson = {}
  for (const property in swapiPerson) {
    translatedSwapiPerson[translate[property]] = swapiPerson[property]
  }

  return translatedSwapiPerson
}

module.exports = translateSwapiPerson
