'use strict'

const Usuario = use('App/Models/Usuario')

class SecaoController {
  async store ({ request, response, auth }) {
    let { email, celular, password } = request.all()

    if (password) {
      const token = await auth.attempt(email, password)
      const usuario = await Usuario.findBy('email', email)

      return ({ usuario, token: token.token })
    }

    if (email) {
      email = await Usuario.findBy('email', email)

      response.json(await auth.generate(email))
      return email
    } else {
      celular = await Usuario.findBy('celular', celular)

      if (celular) {
        response.json(await auth.generate(celular))
        return email
      } else { return response.status(401).send({ error: { message: 'Erro ao iniciar a seção' } }) }
    }
  }
}

module.exports = SecaoController
