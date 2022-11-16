import { Observable, Observer } from 'rxjs';


// const obs$ = Observable.create(); //ya no se usa

const miObservable$ = new Observable<string>((miSubscriber) => {

    miSubscriber.next('klk')
    miSubscriber.next('mundo')

    const a = null;
    a.edad = 2; //esto dispara el error y termina la emision, no dispara el .error() ni erl .complete()

    miSubscriber.error('error emitido a proposito')//error emitido, esto detiene la emision, no dispara el complete()

    miSubscriber.complete() // esto ya termina a emision PERO no hace unsubscribe() 

    miSubscriber.next('adios') //este no se emite por el orden

});

miObservable$.subscribe({
    next: resp => console.log(resp),
    error: err => console.warn('Hubo un error: ', err),
    complete: () => console.log('Fue completado')
})


//Otra forma
// const miObserver: Observer<any> = {
//     next: (value: any): void => { console.log('Siguiente:', value); },
//     error: (err: any): void => { console.warn('Error:', err); },
//     complete: (): void => { console.log('Completado:'); }
// }

// miObservable$.subscribe(miObserver)
