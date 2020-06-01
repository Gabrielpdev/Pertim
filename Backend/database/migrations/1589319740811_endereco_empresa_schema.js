'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoEmpresaSchema extends Schema {
  up () {
    this.create('endereco_empresas', (table) => {
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
        .integer('endereco_id')
        .unsigned()
        .references('id')
        .inTable('enderecos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('endereco_empresas')
  }
}

module.exports = EnderecoEmpresaSchema
