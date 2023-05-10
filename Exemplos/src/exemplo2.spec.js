/* Utilizar TDD para criar uma função que receba uma string 
e devolva um objeto com as informações: quantos caracteres a string possui, 
qual seu primeiro caracter e qual seu último caracter
*/
function tranformaUmTextoEmObjetoComInformacoes(texto) {
  const quantidadeDeCaracteres = texto.length
  const primeiroCaracter = texto[0]
  const ultimoCaracter = texto[texto.length - 1]

  return {
    quantidadeDeCaracteres,
    primeiroCaracter,
    ultimoCaracter,
  }
}

describe('tranformaUmTextoEmObjetoComInformacoes', () => {

  test('deveria retornar um objeto com as informações corretas', () => {

    const resultado = tranformaUmTextoEmObjetoComInformacoes('Rosana')

    expect(resultado).toEqual({
      quantidadeDeCaracteres: 6,
      primeiroCaracter: 'R',
      ultimoCaracter: 'a',
    })

    const resultado2 = tranformaUmTextoEmObjetoComInformacoes('a')

    expect(resultado2).toEqual({
      quantidadeDeCaracteres: 1,
      primeiroCaracter: 'a',
      ultimoCaracter: 'a',
    })

    const resultado3 = tranformaUmTextoEmObjetoComInformacoes('01234')

    expect(resultado3).toEqual({
      quantidadeDeCaracteres: 5,
      primeiroCaracter: '0',
      ultimoCaracter: '4',
    })
  })
})
