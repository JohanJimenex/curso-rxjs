import { asyncScheduler } from "rxjs";
//Es como usar el setInterval y timeOut en una sola funcion

const saludar = () => console.log('hola')

function saludar2(objeto) {
    console.log('hola', objeto.nombre)
}

//similar al setTimeout()
// asyncScheduler.schedule(() => { console.log('klk') }, 2000)
// asyncScheduler.schedule(saludar, 1000)
// asyncScheduler.schedule(saludar2, 1000, 'Johan')
// asyncScheduler.schedule(saludar2, 1000, { nombre: 'johan' })

//Similar al setInterva() con timemout, comienza en 2 segundos y leugo se ejecuta cada 1 segundo
let subscripcion = asyncScheduler.schedule(function (state) {

    console.log(state)

    this.schedule(state + 1, 1000);

}, 2000, 'johan')


setTimeout(() => {
    subscripcion.unsubscribe(); 
}, 5000)


