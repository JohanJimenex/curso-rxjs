import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, throttleTime, sampleTime, sample, auditTime } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');


click$.pipe(
    // debounceTime(1000), //atrapa y detiene la emision por un segundo luego la libera, pero si recibe otra antes la reemplaza y resetea su tiempo
    // throttleTime(2000), // No permite emitir nada hasta pasado 2 segs luego de que ha pasado una emision.
    // throttleTime(2000, asyncScheduler, { leading: true, trailing: true }), // recibimos el primer y ultimo dato emitido
    // sampleTime(2000), //emite el ultimo valor emitido dentro de los 2 segundo 
    // sample(click$) // dejará pasar la ultima emision del observable padre solo cuando este obsarvable emita algo
    // auditTime(2000) //Cuando se emite algo se inicia un conteo, Atrapa y detiene la ultima emision por 2 segundos y luego emite el ultimo valor,
    // 
    ).subscribe(console.log)    