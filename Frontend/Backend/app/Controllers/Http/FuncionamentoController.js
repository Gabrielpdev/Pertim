'use strict'

const Funcionamento = use('App/Models/Funcionamento')

class FuncionamentoController {
  async index () {
    const funcionamento = await Funcionamento.query().fetch()

    return funcionamento
  }

  async store ({ request }) {
    const data = request.only(['inicio', 'fim'])

    const funcionamento = await Funcionamento.create(data)

    return funcionamento
  }

  async show ({ params }) {
    const funcionamento = await Funcionamento.findOrFail(params.id)

    await funcionamento.load('dia')

    return funcionamento
  }

  async update ({ params, request }) {
    const funcionamento = await Funcionamento.findOrFail(params.id)
    const data = request.only(['inicio', 'fim'])

    funcionamento.merge(data)

    await funcionamento.save()

    return funcionamento
  }

  async destroy ({ params }) {
    const funcionamento = await Funcionamento.findOrFail(params.id)

    await funcionamento.delete()
  }
}

module.exports = FuncionamentoController
