'use strict'

const FuncionamentoDia = use('App/Models/FuncionamentoDia')

class FuncionamentoDiaController {
  async index () {
    const funcionamentoDia = await FuncionamentoDia.query().with('dia').with('funcionamento').fetch()

    return funcionamentoDia
  }

  async store ({ request, response }) {
    const data = request.only(['funcionamento_id', 'dia_id'])

    const funcionamentoExiste = await FuncionamentoDia.query()
      .where('funcionamento_id', data.funcionamento_id)
      .where('dia_id', data.dia_id)
      .fetch()

    if (funcionamentoExiste.rows[0]) {
      return response.status(400).send({ error: { message: 'Este horário e este dia já estão vinculados' } })
    }

    const funcionamentoDia = await FuncionamentoDia.create(data)

    await funcionamentoDia.load('dia')
    await funcionamentoDia.load('funcionamento')

    return funcionamentoDia
  }

  async show ({ params }) {
    const funcionamentoDia = await FuncionamentoDia.findOrFail(params.id)

    await funcionamentoDia.load('dia')
    await funcionamentoDia.load('funcionamento')

    return funcionamentoDia
  }

  async update ({ params, request }) {
    const funcionamentoDia = await FuncionamentoDia.findOrFail(params.id)
    const data = request.only(['inicio', 'fim'])

    funcionamentoDia.merge(data)

    await funcionamentoDia.save()

    await funcionamentoDia.load('dia')
    await funcionamentoDia.load('funcionamento')

    return funcionamentoDia
  }

  async destroy ({ params }) {
    const funcionamentoDia = await FuncionamentoDia.findOrFail(params.id)

    await funcionamentoDia.delete()
  }
}

module.exports = FuncionamentoDiaController
