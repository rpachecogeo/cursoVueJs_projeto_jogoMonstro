new Vue({
    el: '#app',
    data: {
        scoreJogador: 100,
        scoreMonstro: 100,  
        widthJogador: '100%',
        widthMonstro: '100%',
        resultadoJogo: '',
        iniciarJogo: true,
        jogadasJogador: [],
        jogadasMonstro: []
    },
    methods: {
        desistir(){
            this.scoreJogador = 100,
            this.scoreMonstro = 100,
            this.widthJogador = '100%',
            this.widthMonstro = '100%',
            this.resultadoJogo = '',
            this.iniciarJogo = true
        },
        ataque(){
            var ataqueJogador = parseInt((Math.random()*10).toFixed(0))
            var ataqueMonstro = parseInt((Math.random()*3).toFixed(0)) + ataqueJogador

            if(this.scoreJogador > 0 && this.scoreMonstro > 0){
                this.scoreJogador -= ataqueMonstro
                this.scoreMonstro -= ataqueJogador
                this.widthJogador = this.scoreJogador+'%'
                this.widthMonstro = this.scoreMonstro+'%'
                if(this.scoreJogador <= 0 && this.scoreMonstro <= 0){
                    this.scoreJogador = 0
                    this.scoreMonstro = 0
                    this.widthJogador = this.scoreJogador+'%'
                    this.widthMonstro = this.scoreMonstro+'%'
                    this.resultadoJogo = 'O jogo empatou!'
                } else if (this.scoreJogador <= 0) {
                    this.scoreJogador = 0
                    this.widthJogador = this.scoreJogador+'%'
                    this.resultadoJogo = 'Você perdeu!'
                } else if (this.scoreMonstro <= 0) {
                    this.scoreMonstro = 0
                    this.widthMonstro = this.scoreMonstro+'%'
                    this.resultadoJogo = 'Você ganhou!'
                }
            }             
        },
        ataqueEspecial(){
            var ataqueJogador = parseInt((Math.random()*13).toFixed(0))
            var ataqueMonstro = parseInt((Math.random()*8).toFixed(0))

            if(this.scoreJogador > 0 && this.scoreMonstro > 0){
                this.scoreJogador -= ataqueMonstro
                this.scoreMonstro -= ataqueJogador
                this.widthJogador = this.scoreJogador+'%'
                this.widthMonstro = this.scoreMonstro+'%'
                if(this.scoreJogador <= 0 && this.scoreMonstro <= 0){
                    this.scoreJogador = 0
                    this.scoreMonstro = 0
                    this.widthJogador = this.scoreJogador+'%'
                    this.widthMonstro = this.scoreMonstro+'%'
                    this.resultadoJogo = 'O jogo empatou!'
                } else if (this.scoreJogador <= 0) {
                    this.scoreJogador = 0
                    this.widthJogador = this.scoreJogador+'%'
                    this.resultadoJogo = 'Você perdeu!'
                } else if (this.scoreMonstro <= 0) {
                    this.scoreMonstro = 0
                    this.widthMonstro = this.scoreMonstro+'%'
                    this.resultadoJogo = 'Você ganhou!'
                }
            }             
        },
        cura(){
            var curaJogador = parseInt((Math.random()*3).toFixed(0))
            if(this.scoreJogador > 0 && this.scoreMonstro > 0){
                this.scoreJogador += curaJogador
                this.widthJogador = this.scoreJogador+'%'
            }
        }
    }
})