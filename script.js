
const contador = document.querySelector('.quantidade');
const buttonDeAdd = document.querySelector('.adicionar-button');
const buttonDeRemove = document.querySelector('.remover-button');

buttonDeAdd.addEventListener('click', () => {
    let value = parseInt(contador.value);
    value += 1;
    contador.value = value;
});

buttonDeRemove.addEventListener('click', () => {
    let value = parseInt(contador.value);
    if (value >0){
        value -= 1;
        contador.value = value;
    }
});

