//Introduzco las constantes
const botonesNumeros = document.querySelectorAll('[data-numero]');
const botonesOperandos = document.querySelectorAll('[data-operacion]');
const botonIgual = document.querySelector('[data-igual]');
const botonBorrar = document.querySelector('[data-borrar]');
const botonBorrarTodo = document.querySelector('[data-limpiar-todo]');
const operandoAnterior = document.querySelector('[data-operando-anterior]');
const operandoActual = document.querySelector('[data-operando-actual]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

class Calculator {
  constructor(operandoAnterior, operandoActual) {
    this.operandoAnterior = operandoAnterior
    this.operandoActual = operandoActual
    this.clear()
}

//Función para limpiar todo el 'output' de la calculadora
clear() {
	this.operandoActual = ''
	this.operandoAnterior = ''
	this.operation = undefined 
}

//Función para limpiar el operando actual
delete(){
	this.operandoActual = ''
}

//Añade el número introducido como parámetro a la calculadora
añadirNumero(numero) {
	if (number === '.' this.operandoActual.includes('.')) 
		return
	this.operandoActual = this.operandoActual.toString() + numero.toString() //Ej. Si tengo 1 y luego clico 1, el resultado será 11
}

elegirOperacion(operacion) {
	if (this.operandoActual === '') return
    if (this.operandoAnterior !== '') {
      this.compute()
    }
    this.operacion = operacion
    this.operandoAnterior = this.operandoActual
    this.operandoActual = ''
}

//Toma los valores de la calculadora y calcula el resultado
calcular (){
	let computacion
    const anterior = parseFloat(this.operandoAnterior)
    const actual = parseFloat(this.operandoActual)
    if (isNaN(anterior) || isNaN(actual)) return
    switch (this.operacion) {
      case '+':
        computacion = anterior + actual
        break
      case '-':
        computacion = anterior - actual
        break
      case '*':
        computacion = anterior * actual
        break
      case '÷':
        computacion = anterior / actual
        break
      default:
        return
    }
    this.operandoActual = computacion
    this.operacion = undefined
    this.operandoAnterior = ''
}

eliminar(){
	this.operandoActual = this.operandoActual.toString().slice(0,-1)
}

actualizar(){
 this.operandoActual.innerText =
      this.obtenerNumeroMostrandose(this.operandoActual)
    if (this.operacion != null) {
      this.operandoAnterior.innerText =
        `${this.obtenerNumeroMostrandose(this.operandoAnterior)} ${this.operacion}`
    } else {
      this.operandoAnterior.innerText = ''
    }
  }
}

//Dar funcionalidad al botón de '='
botonIgual.addEventListener('click', button => {
  calculator.calcular()
  calculator.actualizar()
})

//Dar funcionalidad a los botones de los números
botonesNumeros.forEach(button => {
  button.addEventListener('click', () => {
    calculator.añadirNumero(button.innerText)
    calculator.actualizar()
  })
})

//Dar funcionalidad al botón de limpiar todo
botonesOperandos.addEventListener('click', button => {
  calculator.clear()
  calculator.actualizar()
})

//Dar funcionalidad al botón de borrar
botonBorrar.addEventListener('click', button => {
  calculator.eliminar()
  calculator.actualizar()
})

obtenerNumeroMostrandose(numero) {
    const floatNumber = parseFloat(numero)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}