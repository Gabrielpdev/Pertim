'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Produto = use('App/Models/Produto')

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  async index ({ request }) {
    const { page = 1 } = request.get()

    const produto = await Produto.query().with('empresa').paginate(page, 5)

    return produto
  }

  async store ({ request }) {
    const data = request.only(['nome', 'valor', 'valor_promocional', 'informacao', 'empresa_id'])

    await Produto.create(data)

    return data
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
