export default function Footer() {
    const footer = document.createElement('footer');
    const h3 = document.createElement('h3');

    h3.textContent = 'WebVahvero';

    footer.appendChild(h3);

    return footer;
};