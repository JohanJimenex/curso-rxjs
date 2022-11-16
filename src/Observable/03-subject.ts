import { Observable, Subject } from 'rxjs';

const intervalo$ = new Observable<number>((miSubscriber) => {

    const intervalID = setInterval(() => {
        miSubscriber.next(Math.random())
        console.log('el timer sigue');
        
    }, 1000);

    //Se llama cuando se desuscribe
    return () => {
        console.log('se cancela el timer');
        clearInterval(intervalID);
    }

})


/*
* 1. Casteo multiple, distribuye el mismo valor para multiples subcritores
* 2. Tambien es un Observer, por lo que tiene lo de .next() .error() y .complete()*/
const miSubject$ = new Subject();

// al usar un subject emite el mismo valor para todos  tiene adentro el .next .error y .complete
intervalo$.subscribe(miSubject$);

const sub1 = miSubject$.subscribe({ next: (resp) => console.log('sub 01:', resp) });
const sub2 = miSubject$.subscribe({ next: (resp) => console.log('sub 02:', resp) });


setTimeout(() => {
    miSubject$.next(10);
    miSubject$.complete();


}, 3500);

