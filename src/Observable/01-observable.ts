import { Observable, Observer } from 'rxjs';


// const obs$ = Observable.create(); //ya no se usa
//PODEMOS CREAR NUESTRO PROPIO OBSERVABLE PERSONALZADO
const miObservable$ = new Observable<string>((miSubscriber) => {

    miSubscriber.next('klk')
    miSubscriber.next('mundo')

    const a = null;

    //si hay un error no controlado, detiene todo hasta esta linea.
    // a.edad = 2; //esto dispara el error y termina la emision, no dispara el .error() ni el .complete() ni el unsubscribe()

    let x = setInterval(() => { //esto hay que terminarlo en se haga la desubsscription
        console.log('wee');
    }, 1000)


    miSubscriber.error('error emitido a proposito')//error emitido, esto detiene la emision, no dispara el complete() ni el unsubscribe()

    miSubscriber.complete() // esto ya termina a emision PERO no hace unsubscribe() 

    miSubscriber.next('adios') //este no se emite por el orden

    return () => { //esto solo se llama si se desusscribe pero si es que no hay un error no controlado
        console.log('se cerró la subscription');
        clearInterval(x) //cerramos el interval
    } 

});

let subscription = miObservable$.subscribe({
    next: resp => console.log(resp),
    error: err => console.warn('Hubo un error: ', err),
    complete: () => console.log('Fue completado')
})

subscription.unsubscribe(); //para cerrar la subscription



//Otra forma es crea run Observer  y s epuede pasar directo en la subscripcion
// const miObserver: Observer<any> = {
//     next: (value: any): void => { console.log('Siguiente:', value); },
//     error: (err: any): void => { console.warn('Error:', err); },
//     complete: (): void => { console.log('Completado:'); }
// }

// miObservable$.subscribe(miObserver) // <---- miObserver
