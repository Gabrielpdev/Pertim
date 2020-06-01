'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('telefone').notNullable()
      table.string('whatsapp').notNullable()
      table.string('bio').notNullable()
      table.string('instagram')
      table.string('facebook')
      table.string('situacao').notNullable()
      table.time('tempo_max').notNullable()
      table.time('tempo_min').notNullable()
      table.string('valor_entrega').notNullable()
      table
        .integer('arquivo_id')
        .unsigned()
        .references('id')
        .inTable('arquivos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('propietario_id')
        .unsigned()
        .references('id')
        .inTable('usuarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
