const EntregaDia = use('App/Models/EntregaDia')

module.exports = async function verificarDiaEntrega (entregaID, response) {
  const dias = []
  let final = 0

  entregaID.map(async (dado) => {
    const tamanho = entregaID.length

    const data = await EntregaDia.findOrFail(dado)

    await dias.push(data.$attributes.dia_id)

    final += 1
    if (final === tamanho) {
      for (var i = 0; i < dias.length; i++) {
        for (var j = i; j < dias.length; j++) {
          if (dias[i] === dias[j + 1]) {
            return response.status(400).send({ error: { message: 'Dias repetidos em funcionalidade' } })
          }
        }
      }
    }
  })
}
