'use strict'

const Antl = use('Antl')

class TipoPagamento {
  get rules () {
    return {
      tipo_pagamento: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = TipoPagamento
