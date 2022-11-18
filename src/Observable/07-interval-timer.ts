import { interval, timer } from "rxjs";


// const miInterval$ = interval(5000);

// miInterval$.subscribe({
//     next: (resp) => { console.log(resp) },
//     complete: () => { console.log('compeltado') }
// })

const hoyEn5 = new Date(); //fecha de hoy, ahora

hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)//seteamos 5 segs mas a la fecha de ahora

const miTimer$ = timer(hoyEn5); // se dispara cuando se cumplan 5 segundos
// const miTimer$ = timer(2000); //se disprara en 2 segundo, fin, emite un 0
// const miTimer$ = timer(2000, 1000);// a partir de 2 seg. emite numeros cada 1 seg

miTimer$.subscribe({
    next: (resp) => { console.log(resp) },
    complete: () => { console.log('compeltado el timer') }
}) 



 