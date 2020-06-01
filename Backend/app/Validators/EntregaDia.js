'use strict'

const Antl = use('Antl')

class EntregaDia {
  get rules () {
    return {
      entrega_id: 'required',
      dia_id: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = EntregaDia
