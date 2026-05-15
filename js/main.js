let paginas = []
let paginaActual = 0

window.addEventListener("load", async() =>{
    const siguiente = document.getElementById("siguiente")
    const anterior = document.getElementById("anterior")
    
    cargarCartas()

    siguiente.addEventListener("click", async ()=>{
        paginaActual++
        
        if(paginas[paginaActual]){
            mostrarCartas(paginas[paginaActual])
        }else{
            await cargarCartas()
        }
    })

    anterior.addEventListener("click", async ()=>{
        paginaActual--

        if(paginas[paginaActual]){
            mostrarCartas(paginas[paginaActual])
        }else{
            paginaActual = 0
        }
    })    

    
})

const cargarCartas = async () => {
    const respon = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")
    const data = await respon.json()

    const nuevasCartas = data.cards.map(carta =>
        new Carta(
            carta.code,
            carta.value,
            carta.suit,
            carta.image
        )
    )

    paginas.push(nuevasCartas)
    mostrarCartas(nuevasCartas)

    console.log(paginas)
}
        

const mostrarCartas = (cartasArray) => {
    const cartas = document.getElementById("cartas")

    cartas.innerHTML=""

    cartasArray.forEach((carta)=>{
        cartas.appendChild(carta.createHtmlElement())
    })
}
