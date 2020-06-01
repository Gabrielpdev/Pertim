'use strict'

const Model = use('Model')

const Hash = use('Hash')

class Usuario extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  empresa () {
    return this.hasMany('App/Models/Empresa')
  }

  endereco () {
    return this.belongsToMany('App/Models/Endereco').pivotModel('App/Models/EnderecoUsuario')
  }
}

module.exports = Usuario
