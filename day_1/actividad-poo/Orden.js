import { Computadora, Monitor } from './Computadora.js'
import { Raton, Teclado } from './DispositivoEntrada.js'

class Orden {
    constructor(id, computadora, contador){
        this._id = id
        this._computadora = []
        this._contadorOrden = contador
    }

    agregarComputadoras(computadora){

    }
}


let raton1 = {
    tipoDeEntrada: 'tipo-usb',
    marca: 'logitech',
    id: 'R1'
}

let teclado1 = {
    tipoDeEntrada: 'tipo-usb',
    marca: 'razer',
    id: 'T1'
}

let monitor1 = {
    id: 'tipo-usb',
    marca: 'razer',
    size: 'T1'
}



const raton = new Raton(raton1)
const teclado = new Teclado(teclado1)
const monitor = new Monitor(monitor1)
const computadora = new Computadora('1C', 'Computadora-HP', monitor, teclado, raton)
const orden = new Orden()