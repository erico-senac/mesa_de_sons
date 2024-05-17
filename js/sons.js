
const documento = document.querySelector("html");
const teclas = document.querySelectorAll('.teclas');
const elemento_sons = document.querySelectorAll('audio');

const toca_som = (nome) => {
    let idAudio = `som_${nome}`;
    const som = document.getElementById(idAudio);
    som.play();
}

teclas.forEach(tecla => {
    const getIdSom = tecla.getAttribute('id')

    tecla.onclick = () => {
        toca_som(getIdSom);
    }

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            toca_som(getIdSom);
            tecla.classList.add('mark');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('mark');
    }
})

documento.onkeydown = function (evento) {
    elemento_sons.forEach(som => {
        if(som.getAttribute('src') === `./sounds/${(evento.code).toLowerCase()}.wav`){
            som.play();
        } else {
            console.log(`${evento.code} - ./sounds/${(evento.code).toLowerCase()}.wav - tecla errada`);
        }
    })
}