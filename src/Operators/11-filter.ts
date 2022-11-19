import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 5).pipe(
    filter((valor, index) => {
        console.log(index);

        return valor > 2 // solo deja pasar el valor, si se cumple la condicion true
    })
).subscribe(resp => {
    console.log(resp);
})

let personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from(personajes).pipe(
    filter(v => v.tipo == 'heroe')
).subscribe(res => {
    console.log(res);
})

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(v => v.code),
        filter(v => v == 'Enter') 

    );

keyup$.subscribe((keyBoardEvent: string) => {
    console.log(keyBoardEvent);
});




