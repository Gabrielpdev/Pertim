'use strict'

const Antl = use('Antl')

class Entrega {
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

module.exports = Entrega
