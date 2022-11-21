import { concat, interval, merge, of, combineLatest, forkJoin } from 'rxjs';
import { take, } from 'rxjs/operators'


// concat(// concat permite ejecutar en orden los observavle,  
//     interval(1000).pipe(take(3)),
//     interval(1000).pipe(take(1))
// ).subscribe(console.log)


// merge(// merge a diferenfia de concat que e suno por uno , este deja que se ejecuten todos al mismo tiempo
//     of('yo','con klk', 'klk', 'laaaa') ,
//     of(1000, 'klkd', 'klk') 
// ).subscribe(console.log)

// combineLatest(// combina la ultima emision del primer observable con cada uno de las emisiones del segundo observable
//     of('yo', 'con klk', 'klk', 'laaaa'), // imprime un arreglo ['laaaa', 1000], luego laaa con klkd y por utlimo laaa con klk 
//     of(1000, 'klkd', 'klk')
// ).subscribe(console.log)


forkJoin( // toma solo los ultimos valores de las emisiones de los observables y lo devuelve en un arreglo u bjeto, ej: sale [4,d,true]
//oojo solo va a mitir cuando todos los observables terminen sus emisiones.
    of(1, 2, 3, 4),
    of('a', 'b', 'c', 'd'),
    of(false, true)
).subscribe(console.log)
