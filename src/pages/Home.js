import restaurantImg from '../img/restaurant.jpg';

export default function Home() {
    // Page Title
    const home = document.createElement('section');
    home.classList.add('home');
    const h2 = document.createElement('h2');
    h2.textContent = 'Home';

    // Welcome text
    const h3 = document.createElement('h3');
    h3.textContent = `Welcome to Internet restaurant! ${getHours() > 12 && getHours() < 20 ? 'We are currently open!' : 'We are closed at the moment!'} Have a good ${getDay()}`;

    const welcomeBlock = document.createElement('div');
    welcomeBlock.classList.add('welcome');

    welcomeBlock.appendChild(h2);
    welcomeBlock.appendChild(h3);

    // Restaurant image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = restaurantImg;
    figure.appendChild(img);

    // Info text
    const figcaption = document.createElement('figcaption');
    const p = document.createElement('p');
    p.textContent = 'The internet restaurant is not a normal restaurant as its only location is on the internet. You can view our delicious dishes on the Menu page, but unfortunately you cant order them as we dont really exist.';
    figcaption.appendChild(p);

    
    home.appendChild(welcomeBlock);
    home.appendChild(figure);
    home.appendChild(figcaption);

    return home;
};

export function getDay() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    return weekday[d.getDay()];
};

function getHours() {
    const d = new Date();
    return d.getHours();
};