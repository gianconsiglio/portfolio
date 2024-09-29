idiomaPortugues()

function zeroEsquerda(x){
    return x < 10 ? `0${x}` : x
}

let pos = 1
function trocaIdioma(){
    pos++
    if (pos % 2 === 0){
        document.getElementById('bandeira').src= 'https://flagsapi.com/US/flat/64.png'
        idiomaIngles()
    }else{
        document.getElementById('bandeira').src= 'https://flagsapi.com/BR/flat/64.png'
        idiomaPortugues()
    }
        
}

function idiomaIngles(){
    document.getElementById('btn').disabled=true
    document.getElementById('msg1').innerHTML = ''
    let pos = -1
    let retorno = getInfos()
    document.getElementById('p1').innerHTML = 'I have a degree in Systems Analysis and Development.'
    document.getElementById('p2').innerHTML = 'I work with HTML, CSS, Javascript, Python and SQL SERVER'
    document.getElementById('download').innerHTML = 'Download Cv'
    document.getElementById('download').style.textTransform = 'uppercase'
    document.getElementById('titulo-projeto').innerHTML = 'Projects'
    document.getElementById('projetos-nav').innerHTML = 'Projects'
    document.getElementById('inicio-nav').innerHTML = 'Home'
    document.getElementById('title').innerHTML = 'Portfolio'
    document.getElementById('pfooter').innerHTML = 'Developed by Gianpietro Consiglio © 2024'
    if (retorno === 'Bom dia'){
        retorno = 'Good morning'
    }else if (retorno === 'Boa tarde'){
        retorno = 'Good afternoon'
    }else if (retorno === 'Boa noite'){
        retorno = 'Good night'
    }
  

    const j = setInterval(function(){
        let res = `${retorno}, My name is Gian. Welcome to my Portfolio`
        let lista_msg1 = res.split('')
        pos++
            if (lista_msg1.length === pos){
                clearInterval(j)
                document.getElementById('btn').disabled=false

            }else{
                document.getElementById('msg1').innerHTML += lista_msg1[pos]
            }
    },25)
    
}

function idiomaPortugues(){
    document.getElementById('btn').disabled=true
    document.getElementById('msg1').innerHTML = ''
    let pos = -1
    let retorno = getInfos()
    document.getElementById('p1').innerHTML = 'Sou formado em Análise e Desenvolvimento De Sistemas.'
    document.getElementById('p2').innerHTML = 'Trabalho com HTML, CSS, Javascript, Python e SQL SERVER'
    document.getElementById('download').innerHTML = 'Baixar Cv'
    document.getElementById('download').style.textTransform = 'uppercase'
    document.getElementById('titulo-projeto').innerHTML = 'Projetos'
    document.getElementById('projetos-nav').innerHTML = 'Projetos'
    document.getElementById('inicio-nav').innerHTML = 'Início'
    document.getElementById('title').innerHTML = 'Portfólio'
    document.getElementById('pfooter').innerHTML = 'Desenvolvido por Gianpietro Consiglio © 2024'

    const j = setInterval(function(){
        let res =  retorno + ', Meu nome é Gian. Bem-Vindo ao meu Portfólio'
        let lista_msg1 = res.split('')
        pos ++
            if (lista_msg1.length === pos){
                clearInterval(j)
                document.getElementById('btn').disabled=false

            }else{
                document.getElementById('msg1').innerHTML += lista_msg1[pos]
            }
    },25)
}

function getInfos(){
    if (new Date().getHours() >= 5 && new Date().getHours() <= 11 ){
        var saudacao = 'Bom dia'
        
    }else if (new Date().getHours() >= 12 && new Date().getHours() <= 17 ){
        var saudacao = 'Boa tarde'
        
    }else{
        var saudacao = 'Boa noite'
    }
    
    let msg1 = `${saudacao}`
    return msg1
}

let nav = document.getElementById('listaicons')
let newiten = document.createElement('p')
newiten.setAttribute("id",'lampada')
nav.appendChild(newiten)
let pos1 = 0
newiten.onclick = function(){
    pos1++
    if (pos1 % 2 === 0){
        document.getElementById('lampada').style.backgroundColor = 'black'
        document.getElementById('body').style.backgroundColor = 'rgb(46, 43, 43)'
        document.getElementById('msg-scripts').style.backgroundColor = 'rgb(48, 48, 226)'
        document.getElementById('msg-scripts').style.color = 'white'
        document.getElementById('titulo-projeto').style.color = 'white'
        document.getElementById('footer').style.backgroundColor = 'rgb(32, 32, 32)'
        document.getElementById('footer').style.color = 'white'
        document.getElementById('arrow').style.color = 'white'
        document.getElementById('cabecalho').style.backgroundColor = 'rgb(32, 32, 32)'
        document.getElementById('btn').style.backgroundColor = 'rgb(32, 32, 32)'
        document.getElementById('inicio-nav').style.color = 'white'
        document.getElementById('projetos-nav').style.color = 'white'
        let ps = document.querySelectorAll('p')
        for(x = 0; x < ps.length; x++){
            ps[x].style.color = 'white'
        }

    }else{
        document.getElementById('lampada').style.backgroundColor = 'white'
        document.getElementById('body').style.backgroundColor = 'white'
        document.getElementById('msg-scripts').style.backgroundColor = 'whitesmoke'
        document.getElementById('msg-scripts').style.color = 'black'
        document.getElementById('titulo-projeto').style.color = 'black'
        document.getElementById('footer').style.backgroundColor = 'whitesmoke'
        document.getElementById('footer').style.color = 'black'
        document.getElementById('arrow').style.color = 'black'
        document.getElementById('cabecalho').style.backgroundColor = 'whitesmoke'
        document.getElementById('btn').style.backgroundColor = 'whitesmoke'
        document.getElementById('inicio-nav').style.color = 'black'
        document.getElementById('projetos-nav').style.color = 'black'
        let ps = document.querySelectorAll('p')
        for(x = 0; x < ps.length; x++){
            ps[x].style.color = 'black'
        }

    }
    
}


