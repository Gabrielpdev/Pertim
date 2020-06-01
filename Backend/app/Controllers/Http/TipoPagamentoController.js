'use strict'

const TipoPagamento = use('App/Models/TipoPagamento')

class TipoPagamentoController {
  async index () {
    const tipoPagamento = await TipoPagamento.query().fetch()

    return tipoPagamento
  }

  async store ({ request }) {
    const data = request.only(['tipo_pagamento'])

    const tipoPagamento = TipoPagamento.create(data)

    return tipoPagamento
  }

  async show ({ params }) {
    const tipoPagamento = await TipoPagamento.findOrFail(params.id)

    return tipoPagamento
  }

  async update ({ params, request }) {
    const tipoPagamento = await TipoPagamento.findOrFail(params.id)
    const data = request.only(['tipo_pagamento'])

    tipoPagamento.merge(data)

    await tipoPagamento.save()

    return tipoPagamento
  }

  async destroy ({ params }) {
    const tipoPagamento = await TipoPagamento.findOrFail(params.id)

    await tipoPagamento.delete()
  }
}

module.exports = TipoPagamentoController
