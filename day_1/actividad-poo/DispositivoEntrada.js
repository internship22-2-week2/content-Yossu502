export class DispositivoEntrada {
    constructor(dispositivo){
        this._tipoDeEntrada =  dispositivo.tipoDeEntrada
        this._marca = dispositivo.marca
    }

    get tipoDeEntrada(){
        return this._tipoDeEntrada 
    }

    get marca(){
        return this._marca
    }

}

export class Raton extends DispositivoEntrada {
    static contadorRaton = 0
    constructor(raton){
        super(raton)
        this._idRaton = raton.id
        contadorRaton++
    }
}

export class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0
    constructor(teclado){
        super(teclado)
        this._idTeclado = teclado.id
        contadorRaton++
    }
}

