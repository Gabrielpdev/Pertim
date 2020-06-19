'use strict'

const Antl = use('Antl')

class Dia {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Dia
