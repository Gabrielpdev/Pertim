'use strict'

const Antl = use('Antl')

class Endereco {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      latitude: 'required',
      longitude: 'required',
      logradouro: 'required',
      numero: 'required',
      bairro: 'required',
      cidade: 'required',
      uf: 'required',
      cep: 'max:9| min:8 | required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Endereco
