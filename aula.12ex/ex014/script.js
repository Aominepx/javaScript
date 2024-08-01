function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.scr = 'fotomanha.png'
        document.body.style.background = '#F0AA00'
    } else if (hora >= 12 && hora <= 18) {
        img.scr = 'fototarde.png'
        document.body.style.background = '#F06600'
    } else {
        img.scr = 'fotonoite.png'
        document.body.style.background = '#002DF0'
    }
}