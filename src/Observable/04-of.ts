import { of } from "rxjs";

//Tambien podemos  ejecutarlo directo ej: of().subscribe(resp => console.log )
const miObservable$ = of(1, 2, 3, 4, 5, 6)

console.log('inicio');

miObservable$.subscribe({
    next: (resp) => {
        console.log(resp);
    },
    error: null,
    complete: () => {
        console.log('terminamos');
    }
})

console.log('fin');
