'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaPagamentoSchema extends Schema {
  up () {
    this.create('empresa_pagamentos', (table) => {
      table.increments()
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('tipo_pagamento_id')
        .unsigned()
        .references('id')
        .inTable('tipo_pagamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresa_pagamentos')
  }
}

module.exports = EmpresaPagamentoSchema
