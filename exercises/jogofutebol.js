function placar (time1, time2, gol1, gol2) {

    let mensagem;

    if (time1 > time2) {
        mensagem = `O Corinthians está ganhando do Palmeiras de ${gol1} x ${gol2}.`

    } else if (time2 > time1){
        mensagem = `O Palmeiras está ganhando do Corinthians de ${gol2} x ${gol1}.`

    } else {
        mensagem = `O jogo está empatado, ${gol1} x ${gol2}.`
    }

return {
    mensagem: mensagem,
    gol1: gol1,
    gol2: gol2
    }
};

    document.querySelector('#btJogo').addEventListener('click', function() {
        const time1 = document.querySelector('#time1').value;
        const time2 = document.querySelector('#time2').value;
    const gol1 = document.querySelector('#time1').value;
    const gol2 = document.querySelector('#time2').value;

    const placarDoJogo = placar(time1, time2, gol1, gol2);

    document.querySelector('#resultadoJogo').innerHTML = `Placar do jogo: ${placarDoJogo.mensagem}`;

    });

    document.querySelector('#limpaPlacar').addEventListener('click', function(){
    document.querySelector('#resultadoJogo').innerHTML = "";
    });