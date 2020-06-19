'use strict'

const Empresa = use('App/Models/Empresa')

class EmpresaProprietarioController {
  async show ({ params }) {
    const empresa = await Empresa.findByOrFail('propietario_id', params.id)

    await empresa.loadMany(['funcionamento.dia', 'funcionamento.funcionamento', 'entrega.dia', 'entrega.entrega', 'endereco', 'pagamento', 'produto', 'arquivo'])

    return empresa
  }
}

module.exports = EmpresaProprietarioController
