'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Dia = use('App/Models/Dia')

class DatabaseSeeder {
  async run () {
    await Dia.create(
      {
        nome: 'Domingo'
      })

    await Dia.create(
      {
        nome: 'Segunda-Feira'
      })

    await Dia.create(
      {
        nome: 'Terça-Feira'
      })

    await Dia.create(
      {
        nome: 'Quarta-Feira'
      })

    await Dia.create(
      {
        nome: 'Quinta-Feira'
      })

    await Dia.create(
      {
        nome: 'Sexta-Feira'
      })

    await Dia.create(
      {
        nome: 'Sábado'
      })
  }
}

module.exports = DatabaseSeeder
