function placar (time1, time2,) {

    let mensagem;

    if (time1 > time2) {
        mensagem = 'O Corinthians está ganhando do Palmeiras'

    } else if (time2 > time1){
        mensagem = 'O Palmeiras está ganhando do Corinthians'

    } else {
        mensagem = 'O jogo está empatado'
    }

return {

    mensagem: mensagem
    
    }
}