document.querySelector('#tema-escuro').addEventListener('click', function trocaTema() {
    
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark'); }
    });

document.querySelector('#tema-claro').addEventListener('click', function trocaTema() {
    
    if (document.documentElement.getAttribute('data-tema') === 'dark') {
        document.documentElement.setAttribute('data-tema', 'light'); }
    });

    document.querySelector('#tema-claro').addEventListener('click', () => {

        document.querySelector('#tema-claro').classList.add('oculto');
        document.querySelector('#tema-escuro').classList.remove('oculto');
        

    });

    document.querySelector('#tema-escuro').addEventListener('click', () => {

        document.querySelector('#tema-claro').classList.remove('oculto');
        document.querySelector('#tema-escuro').classList.add('oculto');
        
    });
