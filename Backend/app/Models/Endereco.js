'use strict'

const Database = use('Database')
const Model = use('Model')

// const calculateDistance = require('../../../utils/CalculateDistance')

class Endereco extends Model {
  static scopeNearBy (query, latitude, longitude, distance) {
    const haversine = `(6371 * acos(cos(radians(${latitude}))
      * cos(radians(latitude))
      * cos(radians(longitude)
      - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(latitude))))`

    return query
      .select('*', Database.raw(`${haversine} as distancia`))
      .whereRaw(`${haversine} <= ${distance}`)
  }

  usuario () {
    return this.belongsToMany('App/Models/Usuario').pivotModel('App/Models/EnderecoUsuario')
  }

  empresa () {
    return this.belongsToMany('App/Models/Empresa').pivotModel('App/Models/EnderecoEmpresa')
  }
}

module.exports = Endereco
