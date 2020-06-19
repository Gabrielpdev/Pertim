'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.string('logradouro')
      table.integer('numero')
      table.string('bairro')
      table.string('cidade')
      table.string('uf')
      table.string('cep')
      table.boolean('usuario').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema
