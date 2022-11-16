import { fromEvent , Observable} from "rxjs";

const miEventObs$:Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup')
const miEventObs$2 = fromEvent<MouseEvent>(document.getElementById('x'), 'click')
const miEventObs$3 = fromEvent<EventListener>(document, 'scroll')

miEventObs$ .subscribe(resp => {
    console.log(resp);

})

