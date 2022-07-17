/* Criando um objeto que possuirá propriedades, ambas do tipo array:
  
    * receitas: []
    * despesas: []
*/

let family ={
  incomes: [2500, 3200, 250.45, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;

  for(let value of array){
    total += value
  }

  return total
}



function calculateBalance() {
      const calculateIncomes = sum(family.incomes)
      const calculateExpenses= sum(family.expenses)
      
      const total = calculateIncomes - calculateExpenses

      const istOK = total >= 0 

      let belanceText = istOK && "Positivo" || "Negativo"

      console.log(`Seu saldo é ${belanceText}: ${total}`)
}

calculateBalance()
