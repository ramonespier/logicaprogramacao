const ancoras = [
    {'url': '/index.html', 'texto': 'Início'},
    {'url': '/html/triangulo.html', 'texto': 'Exerc. 1'},
    {'url': '/html/desconto.html', 'texto': 'Exerc. 2'},
    {'url': '/html/placar.html', 'texto': 'Exerc. 3'},
    {'url': '/html/buscanome.html', 'texto': 'Exerc. 4'},
    {'url': '/html/posto-de-gasolina.html', 'texto': 'Exerc. 5'},
    {'url': '/html/produtos-com-desconto.html', 'texto': 'Exerc. 6'},
    {'url': '/html/natal-mortal.html', 'texto': 'Exerc. 7'}
];

function criaAncora(url, texto) {
    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;
};

function criaLi(ancora) {
    const li = document.createElement('li');
    li.appendChild(ancora);

    return li;
};

function criaUlNav(ancoras) {
    const ul = document.createElement('ul');

    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);

    });

    return ul;
}

function sanduba() {

}

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

// const sanduiche = document.createElement('div')
// sanduiche.classList.add('sanduiche');

const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios e Exercícios';

const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

const divlogoMenu = document.createElement('div');
divlogoMenu.classList.add('logo-menu');
divlogoMenu.append(divLogo, nav);

const header = document.createElement('header');
header.appendChild(divlogoMenu);

document.body.insertAdjacentElement('afterbegin', header);

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css')

document.querySelector('[href="/css/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar)

document.querySelector('.menu-navegacao').classList.add('oculto')



