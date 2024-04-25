        
const produto = document.querySelector('#produto').value;
const quantidade = document.querySelector('#quantidade').value;

function produtosComDesconto (produto, quantidade) {

    const pro1 = quantidade * 4000;
    const pro2 = quantidade * 350;
    const pro3 = quantidade * 650;
    let valor;


    if(produto === '1' && quantidade > '0' && quantidade <= '3') {
        valor = pro1;        
        
    } else if (produto === '1' && quantidade <= '5') {
        valor = pro1 - (pro1 * 0.02)
            
    } else if (produto === '1' && quantidade <= '10') {
         valor = pro1 - (pro1 * 0.03);
                
    } else if (produto === '1' && quantidade > '10') {
        valor = pro1 - (pro1 * 0.05);  
                
    } else if (produto === '2' && quantidade <= '2') {
        valor = 350;
                    
    } else if (produto === '2' && quantidade <= '5') {
        valor = pro2 - (pro2 * 0.02);
                    
    } else if (produto === '2' && quantidade <= '10') {
        valor = pro2 - (pro2 * 0.03);
                    
    } else  if (produto === '2' && quantidade >= '11') {
        valor = pro2 - (pro2 * 0.05);                                                  

    } else if (produto === '3' && quantidade <= '2') {
        valor = 650;
                
    } else if (produto === '3' && quantidade <= '5') {
        valor = pro3 - (pro3 * 0.02);
                    
    } else if (produto === '3' && quantidade <= '10') {
        valor = pro3 - (pro3 * 0.03);
                    
    } else  if (produto === '3' && quantidade >= '11') {
        valor = pro3 - (pro3 * 0.05);  
    
    } else {
        valor = 'ERRO: Insira um carácter válido.'

    }

    return {
        valor: valor,
        produto: produto,
        quantidade: quantidade
    }  
} 
    // console.log(produtosComDesconto(produto, quantidade));

    document.querySelector('#calc-produto').addEventListener('click', () => {
        const produto = document.querySelector('#produto').value; 
        const quantidade = document.querySelector('#quantidade').value;
        
        const produtoDesconto = produtosComDesconto (produto, quantidade)

        document.querySelector('#resultado-produto').innerHTML = produtoDesconto
    });

    document.querySelector('#limpa-produto').addEventListener('click', function(){
        document.querySelector('#resultado-produto').innerHTML = "";
    });