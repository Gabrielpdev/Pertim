/* eslint-disable camelcase */
'use strict'

const Usuario = use('App/Models/Usuario')
const Endereco = use('App/Models/Endereco')

class UsuarioController {
  async index () {
    const user = await Usuario.query().with('endereco').fetch()

    return user
  }

  async store ({ request }) {
    const data = request.only(['nome', 'celular', 'email'])
    const { endereco_id, password } = request.all()

    if (password) {
      const usuario = await Usuario.create({ ...data, password, propietario: true })

      if (endereco_id) {
        const asyncFunction = async endereco => {
          const usuarioEndereco = await Endereco.findOrFail(endereco)
          await usuarioEndereco.merge({ usuario: true })
          await usuarioEndereco.save()
        }

        endereco_id.map(endereco => asyncFunction(endereco))
        await usuario.endereco().attach(endereco_id)
      }

      return usuario
    }
    const usuario = await Usuario.create({ ...data, propietario: false })

    if (endereco_id) {
      const asyncFunction = async endereco => {
        const usuarioEndereco = await Endereco.findOrFail(endereco)
        await usuarioEndereco.merge({ usuario: true })
        await usuarioEndereco.save()
      }

      endereco_id.map(endereco => asyncFunction(endereco))
      await usuario.endereco().attach(endereco_id)
    }

    return usuario
  }

  async show ({ params }) {
    const user = await Usuario.findOrFail(params.id)

    return user
  }

  async update ({ params, request }) {
    const usuario = await Usuario.findOrFail(params.id)
    const data = request.only(['nome', 'celular', 'email'])
    const { endereco_id } = request.all()

    if (endereco_id) {
      const asyncFunction = async endereco => {
        const usuarioEndereco = await Endereco.findOrFail(endereco)
        await usuarioEndereco.merge({ usuario: true })
        await usuarioEndereco.save()
      }

      endereco_id.map(endereco => asyncFunction(endereco))
      await usuario.endereco().sync(endereco_id)
    }

    usuario.merge(data)

    await usuario.save()

    return usuario
  }

  async destroy ({ params }) {
    const user = await Usuario.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UsuarioController
