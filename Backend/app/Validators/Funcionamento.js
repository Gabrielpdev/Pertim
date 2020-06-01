'use strict'

const Antl = use('Antl')

class Funcionamento {
  get rules () {
    return {
      inicio: 'required',
      fim: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Funcionamento
