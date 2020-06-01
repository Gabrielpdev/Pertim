'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Arquivo extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/arquivos/${id}`
  }

  empresa () {
    return this.hasMany('App/Models/Empresa')
  }
}

module.exports = Arquivo
