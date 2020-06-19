const FuncionamentoDia = use('App/Models/FuncionamentoDia')

module.exports = async function verificarDiaFuncionamento (funcionamentoId, response) {
  const dias = []
  let final = 0

  funcionamentoId.map(async (dado) => {
    const tamanho = funcionamentoId.length

    const data = await FuncionamentoDia.findOrFail(dado)

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
