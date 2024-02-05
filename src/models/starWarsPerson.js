const dynamoose = require('dynamoose')

const starWarsPersonSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true
  },
  nombre: {
    type: String,
    required: true
  },
  altura: Number,
  masa: Number,
  color_pelo: String,
  color_piel: String,
  color_ojos: String,
  anho_nacimiento: String,
  genero: String,
  mundo: String,
  peliculas: {
    type: 'Array',
    schema: [String]
  },
  especies: {
    type: 'Array',
    schema: [String]
  },
  vehiculos: {
    type: 'Array',
    schema: [String]
  },
  naves_estelares: {
    type: 'Array',
    schema: [String]
  },
  swapi_url: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: {
      creado: {
        type: {
          value: Date,
          settings: {
            storage: 'iso'
          }
        }
      }
    },
    updatedAt: {
      editado: {
        type: {
          value: Date,
          settings: {
            storage: 'iso'
          }
        }
      }
    }
  }
})

module.exports = dynamoose.model('StarWarsPersonTable', starWarsPersonSchema)
