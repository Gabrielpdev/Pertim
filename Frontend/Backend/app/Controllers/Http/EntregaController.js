'use strict'

const Entrega = use('App/Models/Entrega')

class EntregaController {
  async index () {
    const entrega = await Entrega.query().with('dia').fetch()

    return entrega
  }

  async store ({ request }) {
    const data = request.only(['inicio', 'fim', 'dia_id'])

    const entrega = Entrega.create(data)

    return entrega
  }

  async show ({ params }) {
    const entrega = await Entrega.findOrFail(params.id)

    await entrega.load('dia')

    return entrega
  }

  async update ({ params, request }) {
    const entrega = await Entrega.findOrFail(params.id)
    const data = request.only(['inicio', 'fim', 'dia_id'])

    entrega.merge(data)

    await entrega.save()

    return entrega
  }

  async destroy ({ params }) {
    const entrega = await Entrega.findOrFail(params.id)

    await entrega.delete()
  }
}

module.exports = EntregaController
