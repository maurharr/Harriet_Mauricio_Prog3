const arrayCartas = []

window.addEventListener("load", async() =>{
    const respon = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")
    const data = await respon.json()
    console.log(data)

    data.cards.forEach(carta => {
        arrayCartas.push(new Carta(
            carta.code,
            carta.value,
            carta.suit,
            carta.image
        ))
    });
    arrayCartas.forEach((carta)=>{
        const cartas = document.getElementById("cartas")
        cartas.appendChild(carta.createHtmlElement())
    })
    console.log(arrayCartas)
})
