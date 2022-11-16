import { of, range, asyncScheduler } from "rxjs";

const myObservable$ = range(1, 5, asyncScheduler);// el asynScheduler lo convierte Asincrono

console.log('inicio');

myObservable$.subscribe({
    next: (resp) => {
        console.log(resp);
    }
})
console.log('fin');