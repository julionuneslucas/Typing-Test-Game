
// !-----------------------------------------------------
// !                    Constantes
// !-----------------------------------------------------

const TEST_WRAPPER = document.querySelector('.test-wrapper');
const TEST_AREA = document.querySelector('#test-area');
const ORIGIN_TEXT = document.querySelector('#origin-text p').innerHTML;
const RESET_BUTTON = document.querySelector('#reset');
const THE_TIMER = document.querySelector('.timer');



// !-----------------------------------------------------
// !       Comparar o texte inserido com o exemplo
// !-----------------------------------------------------

function spellCheck() {
    let textEntered = TEST_AREA.value;
    console.log(textEntered);
}


// !-----------------------------------------------------
// !                  Iniciar o Timer
// !-----------------------------------------------------

// Detectar quanto conteudo existe dentro da box e se for igual a 0 (primeiro valor) iniciar o timer 
function start() {
    let textEnterLength = TEST_AREA.value.length;
    console.log(textEnterLength);
}


// !-----------------------------------------------------
// !                  Limpar todo (Reset)
// !-----------------------------------------------------

function reset() {
    console.log('O botão reset foi pressionado!');
}


// !-----------------------------------------------------
// !    EventListeners para input do teclado e Reset
// !-----------------------------------------------------

// quando começamos a ercrever, inicia o timer
TEST_AREA.addEventListener('keypress', start, false);
// quando se deixa de escrever, ocorre a verificação do texto
TEST_AREA.addEventListener('keyup', spellCheck, false);
// Botão reset
RESET_BUTTON.addEventListener('click', reset, false);




