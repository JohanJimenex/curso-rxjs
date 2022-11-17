import { range, fromEvent } from "rxjs";
import { map, pluck , mapTo} from "rxjs/operators";


range(1, 5).pipe(
    // es como el .map(), va tomando cada valor
    // map(v => v * 10) //retorna el valor por 10
    // map<number,number>(v => v * 10) // con tipado
    // map<number, string>(v => 'hello') // con tipado, entrada y de salida un string
    // map(valor => { //con cuerpo 
    //     return valor * 10
    // })
).subscribe(resp => {
    console.log(resp);
})


const keyUpEvent$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUpEvent$.pipe(
    map(event => event.code)
).subscribe(resp => {
    console.log(resp);
})

keyUpEvent$.pipe(
    //con pluck obtenemos una propiedad por su clave, 
    //si un objeto está dentro de otro objeto lo agregamos con coma
    pluck('key', 'otraClaveDentro')
).subscribe(resp => {
    console.log(resp);
})

keyUpEvent$.pipe(
    mapTo('retorna este string u otra cosa')
).subscribe(resp => {
    console.log(resp);
})