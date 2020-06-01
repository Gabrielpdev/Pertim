'use strict'

const Antl = use('Antl')

class Usuario {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome: 'required',
      email: 'email|unique:usuarios',
      celular: 'unique:usuarios'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Usuario
