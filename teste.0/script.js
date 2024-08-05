function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#FFF56F'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#FF9500'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#2F00C5'
    }
}