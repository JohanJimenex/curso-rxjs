import { ajax } from 'rxjs/ajax';



const urlBase = 'https://api.github.com/users?per_page=5';

ajax(urlBase).subscribe(console.log)
ajax.get(urlBase).subscribe(console.log) //es lo mismo, ya que por defecgo es get como fetch

ajax.getJSON(urlBase).subscribe(console.log) //obtiene directamente el body del repsonse del json

ajax.getJSON(urlBase, { "Content-Type": "application/json" }).subscribe(console.log) //con ujn header

// ajax.get(urlBase, {'contenttipe':'lklkl'}).subscribe(console.log)
ajax.post(urlBase, { email: "fffe@gmail.com" }, { "contenttype": "applicacionjson" }).subscribe(console.log) //post, body, headers
ajax.put(urlBase, { email: "fffe@gmail.com" }, { "contenttype": "applicacionjson" }).subscribe(console.log) //post, body, headers
ajax.delete(urlBase, { "contenttype": "applicacionjson" }).subscribe(console.log) //post, body, headers

