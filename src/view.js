import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

export default function view() {

    const view = document.createElement('section');
    const main = document.createElement('main');

    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    const navBtns = [homeBtn, menuBtn, contactBtn];

    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            removeActive(navBtns);

            switch(navBtn.textContent) {
                case 'Home':
                    removeChild(main);
                    main.appendChild(Home());
                    navBtn.classList.add('active');
                break;
                case 'Menu':
                    removeChild(main);
                    main.appendChild(Menu());
                    navBtn.classList.add('active');
                break;
                case 'Contact':
                    removeChild(main);
                    main.appendChild(Contact());
                    navBtn.classList.add('active');
                break;
                default:
                    removeChild(main);
                    main.appendChild(Home());
                    navBtn.classList.add('active');
                break;
            }
        });
    });

    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.textContent = 'The Internet Restaurant';
    
    header.appendChild(h1);

    main.appendChild(Contact());
    view.appendChild(header);
    view.appendChild(nav);
    view.appendChild(main);

    return view
};

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function removeActive(navBtns) {

    navBtns.forEach(btn => {
        btn.classList.remove('active');
    })
};