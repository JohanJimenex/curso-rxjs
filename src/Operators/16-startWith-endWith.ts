import { interval, startWith, endWith, of } from 'rxjs';


of(1, 2, 3, 4).pipe(
    startWith(355), //Emite primero que todo este valor, o cualquier otro valor string u objeto
    endWith('klk'), //Emite esto como ultimo valor
    
).subscribe(console.log)
