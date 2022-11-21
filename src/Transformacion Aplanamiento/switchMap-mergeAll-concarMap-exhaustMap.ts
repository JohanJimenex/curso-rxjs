import { fromEvent, } from 'rxjs';
import { mergeAll, map, switchMap, concatMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const click$ = fromEvent(document, 'click');

click$.pipe(
    map(v => ajax.get('https://reqres.in/api/users')),
    // switchMap(nuevoObs => {
        // nuevoObs.subscribe(console.log)
    // }),
    // mergeAll() //Es como el switchMap pero acepta muchas peticiones abiertas, mientras que switchMap cierra la anterior si se emite una nueva
    // concatMap(resp => console.log) // a diferencia del switchMap que tumba las peticiones si existe una nueva, este las coloca en cola hasta y la va emitiendo segun se vayan temrinando la actual
    // exhaustMap( resp => console.log) // este se queda trabajando con el primer observable que recibe, si se emite uno nuevo no lo acepta , lo ignora, y solo acepta otro cuando termine con el que ya tiene
    // 
).subscribe(console.log)
