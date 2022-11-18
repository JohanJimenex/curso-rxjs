import { Observable } from 'rxjs';

const intervalo$ = new Observable<number>((miSubscriber) => {

    let contador = 0;

    let miIntervalo = setInterval(() => {
        console.log('El intervalo sigue ejecutandose despues del unsubscribe');
        miSubscriber.next(contador++)
    }, 1000)


    setTimeout(() => {
        miSubscriber.complete() //esto detiene la subscription pero no la cierra
    }, 4000);

    //este return se ejecuta cuando se DEsuscribe con .unsubscribe()
    return () => {
        console.log('Intervalo destruido');
        clearInterval(miIntervalo);
    }

});

const intertvalSub1 = intervalo$.subscribe({
    next: resp => console.log(resp),
    complete: () => console.log('Completado')
})

const intertvalSub2 = intervalo$.subscribe({
    next: resp => console.log(resp),
    complete: () => console.log('Completado')
})

//Siver para que concatenrar observable y que compartan la misma subscription, se peude concatenar mas .add()
intertvalSub1.add(intertvalSub2)

setTimeout(() => {
    intertvalSub1.unsubscribe();
}, 8000);


