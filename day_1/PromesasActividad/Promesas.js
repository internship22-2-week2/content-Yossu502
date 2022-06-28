import https from 'https'

export class Promesas {
    constructor(urlApi) {
       this._urlApi = urlApi
    }

    startAsynchronousRequest(){
        return new Promise((resolve, reject) => {
            https.get(this._urlApi, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })
    }
}


export class PromiseAll {
    constructor(urlApi, urlApi2, urlApi3) {
       this._urlApi = urlApi
       this._urlApi2 = urlApi2
       this._urlApi3 = urlApi3
    }
    
    startPromiseAll(){
        const p1 = new Promise((resolve, reject) => {
            https.get(this._urlApi, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })

        const p2 = new Promise((resolve, reject) => {
            https.get(this._urlApi2, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })

        const p3 = new Promise((resolve, reject) => {
            https.get(this._urlApi3, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })
        
        Promise.all([p1, p2, p3]).then(responses => {
            responses.forEach(response => {
                console.table(response);
            })
        });
    
    }
}


export class PromiseRace {
    constructor(urlApi, urlApi2, urlApi3) {
       this._urlApi = urlApi
       this._urlApi2 = urlApi2
       this._urlApi3 = urlApi3
    }
    
    startPromiseRace(){
        const p1 = new Promise((resolve, reject) => {
            https.get(this._urlApi, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })

        const p2 = new Promise((resolve, reject) => {
            https.get(this._urlApi2, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })

        const p3 = new Promise((resolve, reject) => {
            https.get(this._urlApi3, (resp) => {
                let data = ''
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    resolve(JSON.parse(data))
                })
            })
        })
        
        Promise.race([p1, p2, p3]).then(responses => {
            console.log(responses);
        });
    
    }
}
