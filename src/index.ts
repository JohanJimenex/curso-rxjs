import { of, from } from "rxjs";

/**
 * of(): toma argumentos, y emite la secuencia, 
 * dependiendo cuantos arguentos mandemos, aguanta hasta 50 creo. 
 */


//* from(): crea un observable en base a una arreglo, objeto,
//* promesa, y lo itera como un .forEache()
// const miObservable$ = from([1, 2, 3, 4, 5]);// imprime en orden 1, luego 2, 3, 4, y 5
// const miObservable$ = of(...[1, 2, 3, 4, 5]);// lo mismo pero con of y el spread operator
// const miObservable$ = from('Johan');// itera y emite cada letra
const miObservable$ = from(fetch('https://reqres.in/api/users/1'));// itera y emite cada letra

// miObservable$.subscribe({
//     next: async (resp) => {
//         console.log(await resp.json());
//         //Forma vieja con then() ya qu ees una promesa
//         // resp.json().then(res => {
//         //     console.log(res);
//         // })
//     },
// })

//Funcion generadora: con el asteriscto se indica.
//Emite un valor por cada llamada con .next()
const miGenerador = function* () {
    yield 1; //para generar y emitir valor
    yield 2;
    yield 3;
}

const iterador = miGenerador()// se debe guardar la referencia

//s epuede usar un bucle for tambien
console.log(iterador.next()); //emite 1
console.log(iterador.next()); // 2
console.log(iterador.next()); // 3
console.log(iterador.next()); // undefine, done: true

//Lo mismo pero con el observable 'FROM'
from(iterador).subscribe(resp => {
    console.log(resp);
})