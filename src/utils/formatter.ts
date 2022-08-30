// formata a data das transações
export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

// Formata os preços das transações
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
