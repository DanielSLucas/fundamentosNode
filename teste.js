const transactions = [
  {
    type: 'outcome',
    value: 300,
  },
  {
    type: 'income',
    value: 300,
  },
  {
    type: 'outcome',
    value: 300,
  },
  {
    type: 'income',
    value: 300,
  },
  {
    type: 'income',
    value: 300,
  },
];

// function agruparPor(objetoArray, propriedade) {
//   return objetoArray.reduce(function (acc, obj) {
//     var key = obj[propriedade];
//     if (!acc[key]) {
//       acc[key] =  0;
//     }

//     acc[key] += Number(obj.value);
//     return acc;
//   }, {});
// }

// console.log(agruparPor(transactions, 'type'));


// const reduceIncome = (accumlator = 0, currentValue) => {
//   console.log("tipo: " + currentValue.type);
//   console.log( "acumulador: " + accumlator )
//   if( currentValue.type === 'income') {
//     console.log( "acumulador: " + accumlator )
//     console.log(  "valor atual: " + currentValue.value )
//     return accumlator + Number(currentValue.value);
//   }
// };

// const incomeTotal = transactions.reduce(reduceIncome);

// console.log(incomeTotal);

const reducer = (acc, obj) => {
  const key = obj.type;
  if (!acc[key]) {
    acc[key] = 0;
  }

  acc[key] += Number(obj.value);
  return acc;
};

const totais = transactions.reduce(reducer, {})

console.log(totais);
