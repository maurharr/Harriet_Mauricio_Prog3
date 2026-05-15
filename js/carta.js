class Carta{
    code
    value
    suit
    imagen

    constructor(code, value, suit, imagen){
        if(typeof code != "string"||typeof value != "string"||typeof suit != "string"||typeof imagen != "string"){
            throw new Error("Datos invalidos.")
        }
        this.code = code
        this.value = value
        this.suit = suit
        this.imagen = imagen
    }
}
