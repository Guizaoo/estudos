// Controle do flow


//se estiver sujo 
// console.log('lavar o copo')

// console.log('servir cafe') 




// if...else

// let temperature = 37.2

// if(temperature >= 37.5){
//   console.log('febre alta')
// } else if (temperature < 37.5 && temperature >=37){
//   console.log('febre moderada')
// } else{
//   console.log('não esta com febre')
// }


// switch


// function calculate(number1, operator, number2){
// let result

// switch (operator){
//   case '+':
//     result = number1 + number2
//     break
//   case '-':
//     result = number1 - number2
//     break
//   case '*':
//     result = number1 * number2
//     break
//   case '/':
//     result = number1 / number2
//     break
//   default:
//     console.log('não implementado')
//     break
// }

//  return result
// }
// Ex: console.log(calculate(4, '+', 358))

// throw 

function sayMyName(name = ''){
  if( name === ''){
    throw 'Nome é obrigatório'
  }

  console.log('depoisdo erro')
}


// try...catch

try{
  sayMyName()

} catch(e){
  console.log(e)
}

