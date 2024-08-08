function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'img/baby-men.jpeg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/young-men.jpeg')
            } else if ( idade < 50){
                img.setAttribute('src', 'img/men.jpeg')
            } else {
                img.setAttribute('src', 'img/old-men.jpeg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'img/baby-girl.jpeg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/young-woman.jpeg')
            } else if ( idade < 50){
                img.setAttribute('src', 'img/woman.jpeg')
            } else {
                img.setAttribute('src', 'img/old-woman.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}