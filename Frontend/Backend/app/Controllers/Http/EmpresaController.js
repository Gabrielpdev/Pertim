/* eslint-disable camelcase */
'use strict'

const Empresa = use('App/Models/Empresa')
const verificarDiaFuncionamento = require('../../../utils/verificarDiaFuncionamento')
const verificarDiaEntrega = require('../../../utils/verificarDiaEntrega')

class EmpresaController {
  async index () {
    const empresa = await Empresa.query()
      .with('produto')
      .with('funcionamento.funcionamento')
      .with('funcionamento.dia')
      .with('entrega')
      .with('endereco')
      .fetch()

    return empresa
  }

  async store ({ request, response }) {
    const data = request.only([
      'nome', 'telefone', 'whatsapp', 'bio', 'situacao', 'tempo_max', 'tempo_min', 'valor_entrega',
      'instagram', 'facebook', 'arquivo_id', 'propietario_id'])
    const { endereco_id, funcionamento_id, entrega_id, pagamento_id } = request.all()

    try {
      const empresaprop = await Empresa.findByOrFail('propietario_id', data.propietario_id)

      if (empresaprop) {
        return response.status(400).send({ error: { message: 'Esse usuário já é proprietário de uma empresa' } })
      }
    } catch (err) {
      if (err.status === 404) {
        const empresa = await Empresa.create(data)

        if (funcionamento_id) {
          verificarDiaFuncionamento(funcionamento_id, response)
          await empresa.funcionamento().sync(funcionamento_id)
        }
        if (entrega_id) {
          verificarDiaEntrega(entrega_id, response)

          await empresa.entrega().sync(entrega_id)
        }
        if (pagamento_id) {
          await empresa.pagamento().attach(pagamento_id)
        }
        if (endereco_id) {
          await empresa.endereco().attach(endereco_id)
        }
        await empresa.loadMany(['funcionamento.funcionamento', 'funcionamento.dia', 'entrega', 'endereco', 'pagamento', 'produto', 'arquivo'])

        return empresa
      }
    }
  }

  async show ({ params }) {
    const empresa = await Empresa.findOrFail(params.id)

    await empresa.loadMany(['funcionamento.funcionamento', 'funcionamento.dia', 'entrega', 'endereco', 'pagamento', 'produto', 'arquivo'])

    return empresa
  }

  async update ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)
    const data = request.only(['nome', 'telefone', 'whatsapp',
      'bio', 'situacao', 'tempo_max', 'tempo_min', 'valor_entrega',
      'instagram', 'facebook', 'arquivo_id', 'propietario_id'])
    const { endereco_id, funcionamento_id, entrega_id, pagamento_id } = request.all()

    if (funcionamento_id) {
      verificarDiaFuncionamento(funcionamento_id, response)
      await empresa.funcionamento().sync(funcionamento_id)
    }
    if (entrega_id) {
      verificarDiaEntrega(entrega_id, response)

      await empresa.entrega().sync(entrega_id)
    }
    if (endereco_id) {
      await empresa.endereco().sync(endereco_id)
    }
    if (pagamento_id) {
      await empresa.pagamento().sync(pagamento_id)
    }

    empresa.merge(data)

    await empresa.save()

    await empresa.loadMany(['funcionamento.funcionamento', 'funcionamento.dia', 'entrega', 'endereco', 'pagamento', 'produto', 'arquivo'])

    return empresa
  }

  async destroy ({ params }) {
    const empresa = await Empresa.findOrFail(params.id)

    await empresa.delete()
  }
}

module.exports = EmpresaController
