
const produtos = document.querySelectorAll('.caixa-produto');

produtos.forEach(produto => {
    const contador = produto.querySelector('.quantidade');
    const buttonDeAdd = produto.querySelector('.adicionar-button');
    const buttonDeRemove = produto.querySelector('.remover-button');

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
});



