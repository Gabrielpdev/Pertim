'use strict'

const Dia = use('App/Models/Dia')

class DiaController {
  async index () {
    const dia = await Dia.query().fetch()

    return dia
  }

  async store ({ request }) {
    const data = request.only(['nome'])

    const dia = Dia.create(data)

    return dia
  }

  async show ({ params }) {
    const dia = await Dia.findOrFail(params.id)

    return dia
  }

  async update ({ params, request }) {
    const dia = await Dia.findOrFail(params.id)
    const data = request.only(['nome'])

    dia.merge(data)

    await dia.save()

    return dia
  }

  async destroy ({ params }) {
    const dia = await Dia.findOrFail(params.id)

    await dia.delete()
  }
}

module.exports = DiaController
