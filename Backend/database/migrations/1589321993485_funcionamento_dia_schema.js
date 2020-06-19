'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionamentoDiaSchema extends Schema {
  up () {
    this.create('funcionamento_dias', (table) => {
      table.increments()
      table
        .integer('funcionamento_id')
        .unsigned()
        .references('id')
        .inTable('funcionamentos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('dia_id')
        .unsigned()
        .references('id')
        .inTable('dias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionamento_dias')
  }
}

module.exports = FuncionamentoDiaSchema
