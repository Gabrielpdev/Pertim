'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiaSchema extends Schema {
  up () {
    this.create('dias', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dias')
  }
}

module.exports = DiaSchema
