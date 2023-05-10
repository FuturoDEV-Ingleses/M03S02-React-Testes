function soma(num1, num2) {
  return num1 + num2
}

describe('Soma', () => {
  test('deveria retornar 2 quando somo 1 + 1', () => {
    const resultado = soma(1, 1)
    expect(resultado).toBe(2)
  })

  test('deveria retornar -498 quando somo -500 + 2', () => {
    const resultado2 = soma(-500, 2)
    expect(resultado2).toBe(-498)
  })

  test('deveria retornar 0 quando somo 1 + -1', () => {
    const resultado = soma(1, -1)
    expect(resultado).toBe(0)
  })
})
