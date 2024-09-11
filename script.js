function atualizarTempo() {
    let hrs = new Date()
    let horas = hrs.getHours().toString()
    let minutos = hrs.getMinutes().toString()
    let segundos = hrs.getSeconds().toString()

    document.querySelector('.time').textContent = `${horas}:${minutos}:${segundos}`

}

setInterval (atualizarTempo, 957)
atualizarTempo()