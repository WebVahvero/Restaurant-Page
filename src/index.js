import Footer from './components/Footer';
import view from './view';
import './styles/style.scss';

const appendToPage = () => {
    const content = document.createElement('div');

    content.appendChild(view());

    content.appendChild(Footer());

    return content;

};

window.onload = () => {
    document.body.appendChild(appendToPage());
};