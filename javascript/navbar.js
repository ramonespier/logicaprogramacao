const aHome = document.createElement('a');
aHome.setAttribute('href', '../html/index.html');
aHome.innerHTML = 'Início';

const liHome = document.createElement('li');
liHome.appendChild(aHome);

//Ancora exercício 1
const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '../html/index.html');
aExercicio1.innerHTML = 'Início';

const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

const ulNav = document.createElement('ul');
ulNav.appendChild(aHome, liExercicio1);

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

const divlogoMenu = document.createElement('div');
divlogoMenu.classList.add('logo-menu');
divlogoMenu.appendChild(nav);

const header = document.createElement('header');
header.appendChild(divlogoMenu);

document.body.insertAdjacentElement('afterbegin', header);

document.body.insertBefore(nav, document.body.firstChild);

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css')

document.head.appendChild(linkNavbar);


