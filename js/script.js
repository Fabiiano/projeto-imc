import { modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {calculateIMC, notNum} from './utils.js'

const form = document.querySelector("form")
const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")

inputPeso.oninput = () => AlertError.close()
inputAltura.oninput = () => AlertError.close()

form.onsubmit = (e) => {
  e.preventDefault()

  const peso = inputPeso.value
  const altura = inputAltura.value

  const showAlertError = notNum(peso) || notNum(altura)
  
  if(showAlertError) {
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = calculateIMC(peso, altura)
  displayResultMessage(result)
}

export function displayResultMessage(result){
  const message  =`Seu IMC é de ${result}`

  modal.message.innerHTML = message
  modal.open()
}