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

    toJsonString(){
        return JSON.stringify(this)
    }

    static createFromJsonString(json){
        let carta = JSON.parse(json)
        return new Carta(
            carta.code,
            carta.value,
            carta.suit,
            carta.imagen
        )
    }

    createHtmlElement(){
        const div = document.createElement("div")

        div.innerHTML=`
        <h5>${this.code} ${this.suit}</h5>
        <a href="${this.imagen}" target="_blank">
            <img src="${this.imagen}">
        </a>
        <p>Valor: $${this.value}</p>
        <button type="button" id="btnGuardar">Guardar</button>
        `

        const guardar = div.querySelector("#btnGuardar")
        guardar.addEventListener("click", ()=>{
            guardarCarta()
        })
        return div;
    }
}
