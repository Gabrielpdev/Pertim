'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Produto = use('App/Models/Produto')

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  async index () {
    const produto = await Produto.query().with('empresa').fetch()

    return produto
  }

  async store ({ request }) {
    const data = request.only(['nome', 'valor', 'valor_promocional', 'informacao', 'empresa_id'])

    const produto = await Produto.create(data)

    await produto.load('empresa')

    return produto
  }

  async show ({ params }) {
    const produto = await Produto.findOrFail(params.id)

    await produto.load('empresa')

    return produto
  }

  async update ({ params, request }) {
    const produto = await Produto.findOrFail(params.id)
    const data = request.only(['nome', 'valor', 'valor_promocional', 'informacao', 'empresa_id'])

    produto.merge(data)

    await produto.save()

    await produto.load('empresa')

    return produto
  }

  async destroy ({ params }) {
    const produto = await Produto.findOrFail(params.id)

    await produto.delete()
  }
}

module.exports = ProdutoController
