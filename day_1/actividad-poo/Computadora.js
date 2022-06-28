import { DispositivoEntrada, Raton, Teclado } from './DispositivoEntrada.js'

export class Computadora {
    static contadorComputadora = 0 
    constructor(id, nombre, Monitor, Teclado, Raton, contador){
        this._idComputadora = id
        this._nombre = nombre
        this._monitor = Monitor
        this._teclado = Teclado
        this._raton = Raton
        contadorComputadora++
    }
}

export class Monitor {
    static contadorMonitor = 0
    constructor(monitor){
        this._idMonitor = monitor.id
        this._marca = monitor.marca
        this._size = monitor.size
        contadorMonitor++
    }
}