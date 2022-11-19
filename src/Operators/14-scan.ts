import { fromEvent, interval, range } from 'rxjs';
import { scan, take } from 'rxjs/operators';



const timer$ = interval(1000)

timer$.pipe(
    take(4),//toma 1 y lo emite al siguiente pipe, luego toma 2 y asi 
    scan((acumulado, valorActual) => {// valorActual le va pasando al acumulado si recibe mas valores
        console.log('acumulado',acumulado);
        console.log('actual',valorActual);
        return acumulado+valorActual
    }, 20)// con ese parametro le damos un valor por defecto al acumulado
).subscribe(v => {
    console.log(v);// recibimos cada emision de SCAN por cada emision, a diferencia de reduce que es cuando lo acumula 
    
}) 