'use strict'

const Antl = use('Antl')

class Funcionamento {
  get rules () {
    return {
      funcionamento_id: 'required',
      dia_id: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Funcionamento
