import { interval, fromEvent } from 'rxjs';
import {
    first,
    takeWhile,
    takeUntil,
    skip,
    distinct,
    distinctUntilChanged,
    distinctUntilKeyChanged,

} from 'rxjs/operators';




const intervalo$ = interval(500);

const clickEvent$ = fromEvent(document, 'click')

intervalo$.pipe(
    // first(),//toma la primera emisión del observable y cierra el mismo igual que take(1)
    // first(v => v > 5),//Emite el primero en cumplir la condicion emite el valor y cierra // emite un  3
    // takeWhile(x => x < 10, true),//mientras el valor emitido sea menor a 10 lo deja pasar, el 'true' emite el valor que n
    // takeUntil(clickEvent$),// este operator dejará pasar todo lo del observable emita hasta que esté que tiene dentro emita algo
    // skip(2), // omite las dos primeras emisiones, luego deja apsar todo lo demás
    // distinct(), //sólo permite pasar los valores que no se han repetido en la emisión
    // distinct(v => v.propiedad), //en este caso le pedimos que tome como referencia una propiedad de un objeto
    // distinctUntilChanged(), // Solo deja pasar el valor si el anterior fue diferente
    // distinctUntilChanged((vaAnt, vaAct) => vaAct.prop === vaAnt.prop ),// Comparando objetos
    // distinctUntilKeyChanged('propiedad'),// Comparando objetos es igual anterior. toma la clave de un onbj como referencia
    

).subscribe(console.log)

