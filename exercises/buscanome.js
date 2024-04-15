let nomes = []; //array vazio chamado "nomes"
    
document.addEventListener('keydown', (evento) => {

    if (evento.key === 'Enter') {

        evento.preventDefault();

        if (nomes.length < 10) {
            document.querySelector('#btCadastrar').click();

        } else {

            document.querySelector('#btPesquisar').click();
        }
    }
});


document.querySelector('#btCadastrar').addEventListener('click', () => {
    
    nomes.push(document.querySelector('#nome').value);
    
    // ao atingir 10 nomes...
    if (nomes.length === 10) {
        
        // troque a label do input
        document.querySelector('label[for="nome"]').innerHTML = 'Nome para pesquisar:';
        
        // oculte ao botão cadastrar
        document.querySelector('#btCadastrar').classList.add('oculto');
        
        // desoculte do botão cadastrar
        document.querySelector('#btPesquisar').classList.remove('oculto');
        
    }
});

document.querySelector('#btPesquisar').addEventListener('click', () => {
    
    const nomeBuscado = document.querySelector('#nome').value;
    
    if (nomes.includes(nomeBuscado)) {
        
        document.querySelector('#resultado').innerHTML = 'ACHEI';
        
    } else {
        
        document.querySelector('#resultado').innerHTML = 'NÃO ACHEI';
        
    }
    
});