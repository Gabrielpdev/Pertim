'use strict'

const Arquivo = use('App/Models/Arquivo')
const Helpers = use('Helpers')

class ArquivoController {
  async show ({ params, response }) {
    const arquivo = await Arquivo.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${arquivo.path}`))
  }

  async store ({ request, response }) {
    try {
      if (!request.file('arquivo')) return

      const upload = request.file('arquivo')

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await Arquivo.create({
        path: fileName,
        nome: upload.clientName,
        tipo: upload.type,
        subtipo: upload.subtype
      })
      return file
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro no upload de arrquivo' } })
    }
  }
}

module.exports = ArquivoController
