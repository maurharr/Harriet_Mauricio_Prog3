

window.addEventListener("load", ()=>{
    const cartasGuardadas = document.getElementById("cartasGuardadas")
    cargarCartasGuardadas()
})

const cargarCartasGuardadas = () =>{
    
    cartasGuardadas.innerHTML = ""
    
    console.log(localStorage.getItem("cartas"))

    const cartasLocal = JSON.parse(localStorage.getItem("cartas"))
    if(!cartasLocal) return;
    
    cartasLocal.forEach(carta => {
        const div = document.createElement("div")

        div.innerHTML=`
        <h5>${carta.code} ${carta.suit}</h5>
        <a href="${carta.imagen}" target="_blank">
            <img src="${carta.imagen}">
        </a>
        <p>Valor: $${carta.value}</p>
        `
        cartasGuardadas.appendChild(div)
    });
}
    
