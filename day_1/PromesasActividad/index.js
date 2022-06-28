import { Promesas, PromiseAll, PromiseRace  } from './Promesas.js'

class Main {
    constructor(){

    }

    async urlRequest(url){
        let newUrl = new Promesas(url)
        return newUrl.startAsynchronousRequest()
    }

    async urlRequestPromiseAll(url, url2, url3){
        let newUrl = new PromiseAll(url, url2, url3)
        return newUrl.startPromiseAll()
    }

    async urlRequestPromiseRace(url, url2, url3){
        let newUrl = new PromiseRace(url, url2, url3)
        return newUrl.startPromiseRace()
    }

}
/* 
const promesa1 = new Main()
const resultado = await promesa1.urlRequest('https://flagcdn.com/es/codes.json')
console.table(Object.keys(resultado));

const promesa2 = new Main()
const resultado2 = await promesa2.urlRequest('https://jsonplaceholder.typicode.com/posts')
console.log(resultado2);

const promesa3 = new Main()
const resultado3 = await promesa3.urlRequest('https://jsonplaceholder.typicode.com/posts/2')
console.log(resultado3); */


/* const promesaAll =  new Main()
const resultado = await promesaAll.urlRequestPromiseAll(
    'https://flagcdn.com/es/codes.json',
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/posts/2')


console.table(resultado) */

const promesaAll =  new Main()
await promesaAll.urlRequestPromiseRace(
    'https://flagcdn.com/es/codes.json',
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/posts/2')
