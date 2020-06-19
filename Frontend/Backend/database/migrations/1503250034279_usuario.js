'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('celular').unique()
      table.string('email').unique()
      table.string('password')
      table.boolean('propietario').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UserSchema
