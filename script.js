'use strict';

const jogador0 = document.querySelector('.player--0')
const jogador1 = document.querySelector('.player--1')
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const buttonNG = document.querySelector('.btn--new')
const buttonRD = document.querySelector('.btn--roll')
const buttonH = document.querySelector('.btn--hold')
const dado = document.querySelector('.dice')

let score 
let currentScore
let jogadorAtivo
let aJogar

const TrocaJogador = function()
{
    document.getElementById(`current--${jogadorAtivo}`).textContent =0;
    currentScore = 0;
    jogadorAtivo = jogadorAtivo === 0 ? 1 : 0;
    jogador0.classList.toggle('player--active')
    jogador1.classList.toggle('player--active')
}

const NovoJogo = function()
{
    score = [0,0]
    currentScore = 0
    jogadorAtivo = 0
    aJogar = true;

    score0.textContent = 0
    score1.textContent = 0
    currentScore0.textContent = 0
    currentScore1.textContent = 0

    dado.classList.add('hidden')
    jogador0.classList.remove('player--winner')
    jogador1.classList.remove('player--winner')
    jogador0.classList.add('player--active')
    jogador1.classList.add('player--active')
    document.querySelector('body').style.backgroundColor = '#333'

}

NovoJogo()

buttonRD.addEventListener('click', function()
{
    console.log('click')
    if(aJogar)
    {
        const dado = Math.trunc(Math.random() * 6) + 1
        dado.classList.remove('hidden')
        dado.src = `dice-${dado}.png`
        if (dado != 1)
        {
            currentScore += dado
            document.getElementById(`current--${jogadorAtivo}`).textContent = currentScore
        }
        else
        {
            TrocaJogador()
        }
    }
})

buttonH.addEventListener('click', function()
{
    if (aJogar)
    {
        score[jogadorAtivo] += currentScore
        document.getElementById(`score--${jogadorAtivo}`).textContent = score[jogadorAtivo]
        if(score[jogadorAtivo] >= 100)
        {
            aJogar = false
            dado.classList.add('hidden');
            document.querySelector(`player--${activePlayer}`).classList.remove('player--active')
            document.querySelector('body').style.backgroundColor = 'green'
        }
        else
        {
            TrocaJogador()
        }
    }
})

buttonNG.addEventListener('click', NovoJogo)