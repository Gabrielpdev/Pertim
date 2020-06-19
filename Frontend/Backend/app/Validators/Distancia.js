'use strict'

const Antl = use('Antl')

class Distancia {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      latitude: 'required',
      longitude: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Distancia
