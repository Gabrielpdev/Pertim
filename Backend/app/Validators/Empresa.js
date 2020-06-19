'use strict'

const Antl = use('Antl')

class Empresa {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome: 'required',
      telefone: 'required',
      whatsapp: 'required',
      bio: 'required',
      situacao: 'required',
      tempo_max: 'required',
      tempo_min: 'required',
      valor_entrega: 'required',
      propietario_id: 'required'

    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Empresa
