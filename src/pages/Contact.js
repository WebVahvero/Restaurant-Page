export default function Contact() {
    const contact = document.createElement('section');
    contact.classList.add('contact');

    const title = document.createElement('div');
    title.classList.add('title');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';

    const h3 = document.createElement('h3');
    h3.textContent = 'We are open every day from 12 to 20!';

    const infoWrap = document.createElement('div');
    infoWrap.classList.add('contact-details');

    const address = document.createElement('p');
    address.textContent = 'Vaasanpuistikko 8, 65100 Vaasa';

    const phone = document.createElement('p');
    phone.textContent = '666 666 666';

    const email = document.createElement('p');
    email.textContent = 'internetrestaurant@notreal.fi';

    infoWrap.appendChild(address);
    infoWrap.appendChild(phone);
    infoWrap.appendChild(email);

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.5131509810258!2d21.60985699111362!3d63.09386691089372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467d6042ce0226b7%3A0xe0006ce619f6826d!2sVaasanpuistikko%208%2C%2065100%20Vaasa!5e0!3m2!1sfi!2sfi!4v1664382406952!5m2!1sfi!2sfi';
    map.loading = 'lazy';

    title.appendChild(h2);
    title.appendChild(h3);
    contact.appendChild(title);
    contact.appendChild(infoWrap);
    contact.appendChild(map);

    return contact;
};