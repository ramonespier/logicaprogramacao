        
const produto = document.querySelector('#produto').value;
const quantidade = document.querySelector('#quantidade').value;

function produtosComDesconto (produto, quantidade) {

    let pro1;
    let pro2;
    let pro3;
    let valor;


    if(produto === '1') {
        
        if (quantidade <= '2') {
            valor = 4000;
            
            } else if (quantidade <= '5') {
                valor = pro1 = 4000 - (4000 * 0.02);
                
            } else if (quantidade <= '10') {
                valor = pro1 = 4000 - (4000 * 0.03);
                
            } else  if (quantidade >= '11') {
                valor = pro1 = 4000 - (4000 * 0.05);  

            } else {
                valor = 'ERRO: Insira um carácter válido.'
            }

        } else if (produto === '2') {
        
            if (quantidade <= '2') {
                valor = produto = pro2;
                
                } else if (quantidade <= '5') {
                    valor = pro2 - (pro2 * 0.02);
                    
                } else if (quantidade <= '10') {
                    valor = pro2 - (pro2 * 0.03);
                    
                } else  if (quantidade >= '11') {
                    valor = pro2 - (pro2 * 0.05);  
    
                } else {
                    valor = 'ERRO: Insira um carácter válido.'

                }

        } else {
            if (quantidade <= '2') {
                valor = produto = pro3;
                
                } else if (quantidade <= '5') {
                    valor = pro3 - (pro3 * 0.02);
                    
                } else if (quantidade <= '10') {
                    valor = pro3 - (pro3 * 0.03);
                    
                } else  if (quantidade >= '11') {
                    valor = pro3 - (pro3 * 0.05);  
    
                } else {
                    valor = 'ERRO: Insira um carácter válido.'

                }

        }
    
    return valor;
    // console.log(produtosComDesconto(produto, quantidade));
};

    document.querySelector('#calc-produto').addEventListener('click', () => {
        const produto = document.querySelector('#produto').value 
        const quantidade = document.querySelector('#quantidade').value;
        
        const produtoDesconto = produtosComDesconto (produto, quantidade)

        document.querySelector('#resultado-produto').innerHTML = produtoDesconto
    });

    document.querySelector('#limpa-produto').addEventListener('click', function(){
        document.querySelector('#resultado-produto').innerHTML = "";
    });