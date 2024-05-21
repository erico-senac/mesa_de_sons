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
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
})
documento.onkeydown = (evento) => {
    const som = [...elemento_sons].filter(
        el => (el.getAttribute('src') === `./sounds/${(evento.code).toLowerCase()}.wav`)
    );
    if(som.length > 0) {
        const tecla = [...teclas].filter(
            el => el.getAttribute('id') === som[0].getAttribute('id').replace('som_', '')
        )
        if (tecla.length > 0) {
            tecla[0].classList.add('ativa');
            tecla[0].focus();
        }
        som[0].play();
    }
}
documento.onkeyup = () => {
    teclas.forEach(tecla => {
        tecla.classList.remove('ativa');
    })
}