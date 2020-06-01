'use strict'

const EntregaDia = use('App/Models/EntregaDIa')

class EntregaDiaController {
  async index () {
    const entregaDia = await EntregaDia.query().with('dia').with('entrega').fetch()

    return entregaDia
  }

  async store ({ request, response }) {
    const data = request.only(['entrega_id', 'dia_id'])

    const entregaExiste = await EntregaDia.query()
      .where('entrega_id', data.entrega_id)
      .where('dia_id', data.dia_id)
      .fetch()

    if (entregaExiste.rows[0]) {
      return response.status(400).send({ error: { message: 'Este horário e este dia já estão vinculados' } })
    }

    const entregaDia = await EntregaDia.create(data)

    await entregaDia.load('dia')
    await entregaDia.load('entrega')

    return entregaDia
  }

  async show ({ params }) {
    const entregaDia = await EntregaDia.findOrFail(params.id)

    await entregaDia.load('dia')
    await entregaDia.load('entrega')

    return entregaDia
  }

  async update ({ params, request }) {
    const entregaDia = await EntregaDia.findOrFail(params.id)
    const data = request.only(['entrega_id', 'dia_id'])

    entregaDia.merge(data)

    await entregaDia.save()

    await entregaDia.load('dia')
    await entregaDia.load('entrega')

    return entregaDia
  }

  async destroy ({ params }) {
    const entregaDia = await EntregaDia.findOrFail(params.id)

    await entregaDia.delete()
  }
}

module.exports = EntregaDiaController
