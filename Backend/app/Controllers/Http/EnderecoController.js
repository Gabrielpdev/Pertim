'use strict'

const Endereco = use('App/Models/Endereco')

class EnderecoController {
  async index ({ auth }) {
    console.log(auth)
    const endereco = await auth.current._instanceUser.endereco().with('usuario').fetch()

    return endereco
  }

  async store ({ request }) {
    const data = request.only(['latitude', 'longitude', 'logradouro', 'numero', 'bairro', 'cidade', 'uf', 'cep'])

    const endereco = await Endereco.create({ ...data, usuario: 1 })

    return endereco
  }

  async show ({ params }) {
    const endereco = await Endereco.findOrFail(params.id)

    return endereco
  }

  async update ({ params, request }) {
    const endereco = await Endereco.findOrFail(params.id)
    const data = request.only(['latitude', 'longitude', 'logradouro', 'numero', 'bairro', 'cidade', 'uf', 'cep'])

    endereco.merge(data)

    await endereco.save()

    return endereco
  }

  async destroy ({ params }) {
    const endereco = await Endereco.findOrFail(params.id)

    await endereco.delete()
  }
}

module.exports = EnderecoController
