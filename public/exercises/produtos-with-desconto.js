    const produtos = [{    
        codigo: 1,
        preco: 4.50,
        descricao: "Trento"
    },
    {
        codigo: 2,
        preco: 9.00,
        descricao: "Cheetos grande"
    }
];

    function calculaDesconto(produto, quantidade) {

        let preco;
        let desconto;
        let descricao;
        let valorFinal;

        //percorre o vetor de produtos para pesquisa
        
        for(let i = 0; i < produtos.length; i++) {

            // se o codigo for igual ao procurado, obtem o preco
            if(produtos[i].codigo === produto) {

                preco = produtos[i].preco;
                descricao = produtos[i].descricao;
            }
        }
            // atribui o desconto com base na quantidade comprada

            if (quantidade >= 3 && quantidade <= 5 ) {

                 desconto = 0.02;

            } else if (quantidade >= 6 && quantidade <= 10) {

                desconto = 0.03;

            } else if (quantidade > 10) {
                
                desconto = 0.05;

            } else {
                
                desconto = 0;

            }

            valorFinal = (preco * quantidade) - (preco * quantidade * desconto);

            return {
                codigo: produto,
                preco: preco,
                descricao: descricao,
                valorFinal: valorFinal
        };
    };
    

    document.querySelector('#calc-produto').addEventListener('click', () => {

        const produto = Number(document.querySelector('#produto').value);
        const quantidade = Number(document.querySelector('#quantidade').value);

        const codProduto = calculaDesconto(produto, quantidade);

        const pDescricao = document.createElement('p');
        pDescricao.innerHTML = codProduto.descricao;
        pDescricao.setAttribute('data-produto', codProduto.codigo);

        const pValorFinal = document.createElement('p');
        pValorFinal.innerHTML = codProduto.valorFinal.toFixed(2);
        pValorFinal.classList.add('monetario');

        document.querySelector('#resultado-produto').append(pDescricao, pValorFinal);
    })

    document.querySelector('#limpa-produto').addEventListener('click', function(){
        document.querySelector('#resultado-produto').innerHTML = "";
    });