'use strict'

const Antl = use('Antl')

class Produto {
  get rules () {
    return {
      nome: 'required',
      valor: 'required',
      valor_promocional: 'required',
      informacao: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Produto
