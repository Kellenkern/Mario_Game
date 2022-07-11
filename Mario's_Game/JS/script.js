 //Mário's jump
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
document.addEventListener('keydown', function (event) {

    const tecla = event.code;
    console.log(event.code);

    if (tecla == 'ArrowUp' || event.code === 'Space') {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');

            const pipePosition = pipe.offsetLeft;
            
            if (pipePosition > 1000) {
                const oldScore = document.getElementById("score").innerHTML;
                scoreTotal(parseInt(oldScore) + 10);
            }
        }, 500);

    }

});

//Get the User name and beginning the game
const formName = document.querySelector('.telaInicio');
const theGame = document.querySelector('.theGame');
const loading = document.querySelector('.loading');
const buttonReset = document.querySelector('.resetButton');
 
function saveName() {

    const name = document.getElementById("name").value;

    document.getElementById("userName").innerHTML = name;

    formName.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(() => {
        theGame.style.display = 'block';
        buttonReset.style.display = 'block';
        loading.style.display = 'none';
        startGame();
    }, 1500)

}

//Start the game
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');
function startGame() {
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 75) {

            loser.style.display = 'block';
            reset(pipePosition, marioPosition);

            mario.src = './IMG/game-over.png';
            mario.style.width = "60px";
            mario.style.marginLeft = "60px";

            clearInterval(loop);
        }
        
        const score = document.getElementById("score").innerHTML;

        if (score == 100) {
            winner.style.display = 'block';
            reset(pipePosition, marioPosition);
        }

    }, 10);

}

//Intern functions of the game: 1-stop the mario and pipe position; 2-calculate the score; 3-reset all the game.
function reset(pipePosition, marioPosition) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
}
function scoreTotal(novoTotal) {
    document.getElementById("score").innerHTML = novoTotal;
}
function resetAll() {
    document.location.reload(true);
}