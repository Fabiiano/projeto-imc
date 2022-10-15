export function notNum(value){
  return isNaN(value) || value == ""
}

export function calculateIMC(peso, altura){
  return((peso / ((altura / 100) ** 2)).toFixed(2))
}

