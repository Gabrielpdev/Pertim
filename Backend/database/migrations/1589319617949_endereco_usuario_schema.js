'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoUsuarioSchema extends Schema {
  up () {
    this.create('endereco_usuarios', (table) => {
      table.increments()
      table
        .integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('usuarios')
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
    this.drop('endereco_usuarios')
  }
}

module.exports = EnderecoUsuarioSchema
