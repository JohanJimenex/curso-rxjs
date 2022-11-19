import { range } from 'rxjs';
import { tap } from 'rxjs';


const obsRangoNumeros$ = range(1, 5);

obsRangoNumeros$.pipe(
    tap(valor => console.log('Desde el tap', valor)),
    tap({
        next: resp => console.log('desde el segundo tap', resp),
        error: err => console.log('Si hay un error'),
        complete: () => console.log('completado')
    })
).subscribe(resp => {
    console.log('Desde el susbcriber');
})
