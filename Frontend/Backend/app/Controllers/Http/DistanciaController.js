'use strict'

const Query = use('Query')
const Endereco = use('App/Models/Endereco')
const Empresa = use('App/Models/Empresa')
const Produto = use('App/Models/Produto')

const calculateDistance = require('../../../utils/CalculateDistance')

class DistanciaController {
  async index ({ request }) {
    const query = new Query(request, { order: 'id' })
    const { page, search } = request.get()
    const { latitude, longitude } = request.all()

    if (search) {
      const produto = await Produto.query()
        .where(query.search([
          'nome'
        ]))
        .with('empresa.endereco')
        .paginate(page)

      const lat2 = produto.rows.map(data => {
        return data.$relations.empresa.$relations.endereco.rows.map(data => {
          return data.$attributes.latitude
        })
      })

      const long2 = produto.rows.map(data => {
        return data.$relations.empresa.$relations.endereco.rows.map(data => {
          return data.$attributes.longitude
        })
      })

      const empresaID = produto.rows.map(data => {
        return data.$relations.empresa.$attributes.id
      })

      const distancia = calculateDistance(latitude, longitude, lat2, long2, empresaID)

      const retorno = [null]
      retorno.splice(0, 1)

      console.log(distancia.distancia.length)
      for (var i = 0; i < distancia.distancia.length; i++) {
        const empresa = await Empresa.findOrFail(distancia.empresa_id[i]).where('situacao', 'ATIVA')

        retorno.push({ distancia: distancia.distancia[i], empresa: empresa })
      }
      return (retorno)
    }

    const endereco = await Endereco.query()
      .with('empresa.produto')
      .where('usuario', false)
      .paginate(page)

    const lat2 = endereco.rows.map(data => {
      return data.$attributes.latitude
    })

    const long2 = endereco.rows.map(data => {
      return data.$attributes.longitude
    })

    const [empresaID] = endereco.rows.map(data => {
      return data.$relations.empresa.rows.map(data => {
        return data.$attributes.id
      })
    })

    const distancia = calculateDistance(latitude, longitude, lat2, long2, empresaID)

    const retorno = [null]
    retorno.splice(0, 1)

    for (i = 0; i < distancia.distancia.length; i++) {
      const empresa = await Empresa.findOrFail(distancia.empresa_id[i])

      retorno.push({ distancia: distancia.distancia[i], empresa: empresa })
    }

    return (retorno)
  }
}

module.exports = DistanciaController
