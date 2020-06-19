'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoPagamentoSchema extends Schema {
  up () {
    this.create('tipo_pagamentos', (table) => {
      table.increments()
      table.string('tipo_pagamento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_pagamentos')
  }
}

module.exports = TipoPagamentoSchema
