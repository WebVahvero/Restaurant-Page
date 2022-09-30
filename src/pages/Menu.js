import nachosImg from '../img/nachos.jpg';
import nachoplateImg from '../img/nachoplate.jpg';
import mozzarellaImg from '../img/mozzarella.jpg';
import cheeseBrgImg from '../img/cheesebrg.jpg';
import baconBrgImg from '../img/baconbrg.jpg';
import chickenBrgImg from '../img/chickenbrg.jpg';
import halloumImg from '../img/halloum.jpg';
import chevreImg from '../img/chevre.jpg';
import chickenSaladImg from '../img/chickensalad.jpg';
import salmonImg from '../img/salmongrill.jpg';
import steakImg from '../img/steak.jpg';
import chickenGrillImg from '../img/chickenGrill.jpg';
import iceCreamImg from '../img/icecream.jpg';
import sorbetImg from '../img/sorbet.jpg';
import fondantImg from '../img/fondant.jpg';
import { getDay } from './Home';

export default function Menu() {
    let foodItems = [];

    class Food {
        constructor(category, name, desc, price, img, imgCredits) {
            this.category = category;
            this.name = name;
            this.desc = desc;
            this.price = price;
            this.img = img;
            this.imgCredits = imgCredits;
        }
    }

    const starter1 = new Food('starter', 'Nachos', 'With a side of salsa dip', 4.20, nachosImg, 'Photo by <a href="https://unsplash.com/@coffeefyworkafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Coffeefy Workafe</a>');
    const starter2 = new Food('starter', 'Nacho Plate', 'Nachos, House guacamole, salsa, French cream, warm cheese sauce, jalapenos', 10.90, nachoplateImg, 'Photo by <a href="https://unsplash.com/@courtneymcook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Courtney Cook</a>');
    const starter3 = new Food('starter', 'Mozzarella Sticks', 'With a side of Salad and garlic dip.', 7.90, mozzarellaImg, 'Photo by <a href="https://unsplash.com/@kapoorparas28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paras Kapoor</a>');
    const burger1 = new Food('burger', 'Cheese Hamburger', 'Hamburger with cheese', 14.90, cheeseBrgImg, 'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a>');
    const burger2 = new Food('burger', 'Bacon Hamburger', 'Hamburger with bacon', 14.90, baconBrgImg, 'Photo by <a href="https://unsplash.com/es/@fifernando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fidel Fernando</a>');
    const burger3 = new Food('burger', 'Chicken Hamburger', 'Hamburger with chicken', 14.90, chickenBrgImg, 'Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Didi Miam</a>');
    const salad1 = new Food('salad', 'Halloum', 'Salad with halloum', 16.90, halloumImg, 'Photo by <a href="https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dovile Ramoskaite</a>');
    const salad2 = new Food('salad', 'Chevre', 'Salad with Chevre', 16.90, chevreImg, 'Photo by <a href="https://unsplash.com/@eatoutcologne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">EAT OUT COLOGNE</a>');
    const salad3 = new Food('salad', 'Chicken', 'Salad with Chicken', 16.90, chickenSaladImg, 'Photo by <a href="https://unsplash.com/es/@fallonmichaeltx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fallon Michael</a>');
    const grill1 = new Food('grill', 'Salmon', 'Salmon with vegetables and potatoes in sauce', 25.50, salmonImg, 'Photo by <a href="https://unsplash.com/ja/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile dot com</a>');
    const grill2 = new Food('grill', 'Steak', 'Steak with vegetables and potatoes in sauce', 26.90, steakImg, 'Photo by <a href="https://unsplash.com/@covertnine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Toomey</a>');
    const grill3 = new Food('grill', 'Chicken', 'Chicken with vegetables and potatoes in sauce', 21.50, chickenGrillImg, 'Photo by <a href="https://unsplash.com/@tempestdesigner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark DeYoung</a>');
    const dessert1 = new Food('dessert', 'Ice cream', 'Vanilla Ice Cream with suprise sauce', 7.90, iceCreamImg, 'Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a>');
    const dessert2 = new Food('dessert', 'Sorbet', 'Melon sorbet with love', 3.90, sorbetImg, 'Photo by <a href="https://unsplash.com/@honeypoppet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandie Clarke</a>');
    const dessert3 = new Food('dessert', 'Chocolate Fondant', 'Comfort treat with vanilla ice cream', 8.50, fondantImg, 'Photo by <a href="https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Griss</a>');

    foodItems.push(starter1);
    foodItems.push(starter2);
    foodItems.push(starter3);
    foodItems.push(burger1);
    foodItems.push(burger2);
    foodItems.push(burger3);
    foodItems.push(salad1);
    foodItems.push(salad2);
    foodItems.push(salad3);
    foodItems.push(grill1);
    foodItems.push(grill2);
    foodItems.push(grill3);
    foodItems.push(dessert1);
    foodItems.push(dessert2);
    foodItems.push(dessert3);

    console.log(foodItems[0].category)

    const starterWrapper = document.createElement('div');
    starterWrapper.setAttribute('id', 'starters');
    const burgerWrapper = document.createElement('div');
    burgerWrapper.setAttribute('id', 'burgers');
    const saladWrapper = document.createElement('div');
    saladWrapper.setAttribute('id', 'salads');
    const grillWrapper = document.createElement('div');
    grillWrapper.setAttribute('id', 'grills');
    const dessertWrapper = document.createElement('div');
    dessertWrapper.setAttribute('id', 'desserts');

    let starters = '';
    let burgers = '';
    let salads = '';
    let grills = '';
    let desserts = '';

    foodItems.forEach(food => {
        switch(food.category) {
            case 'starter':
                starters +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'burger':
                burgers +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'salad':
                salads +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'grill':
                grills +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
            case 'dessert':
                desserts +=
                `
                    <div id="${food.category}" class="menu-card">
                        <img src="${food.img}" alt="${food.name}">
                        <small>${food.imgCredits}</small>
                        <div class="card-text">
                            <h4 class="food-title">${food.name}</h4>
                            <p class="food-desc">${food.desc}<p>
                            <p class="food-price">${food.price}€<p>
                        </div>
                    </div>
                `
            break;
        }
    });

    starterWrapper.innerHTML = starters;
    burgerWrapper.innerHTML = burgers;
    saladWrapper.innerHTML = salads;
    grillWrapper.innerHTML = grills;
    dessertWrapper.innerHTML = desserts;

    const menu = document.createElement('section');
    menu.classList.add('menu');
    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    const startersTitle = document.createElement('h3');
    startersTitle.textContent = 'Starters';
    const burgersTitle = document.createElement('h3');
    burgersTitle.textContent = 'Burgers';
    const saladsTitle = document.createElement('h3');
    saladsTitle.textContent = 'Salads';
    const grillTitle = document.createElement('h3');
    grillTitle.textContent = 'From the Grill';
    const dessertTitle = document.createElement('h3');
    dessertTitle.textContent = 'Desserts';

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    menuWrapper.appendChild(startersTitle);
    menuWrapper.appendChild(starterWrapper);
    menuWrapper.appendChild(burgersTitle);
    menuWrapper.appendChild(burgerWrapper);
    menuWrapper.appendChild(saladsTitle);
    menuWrapper.appendChild(saladWrapper);
    menuWrapper.appendChild(grillTitle);
    menuWrapper.appendChild(grillWrapper);
    menuWrapper.appendChild(dessertTitle);
    menuWrapper.appendChild(dessertWrapper);

    const dailyDeal = getDailyDeal(foodItems);
    const dailyDealCard = document.createElement('div');
    dailyDealCard.classList.add('daily-deal');

    const dailyDealImg = document.createElement('img');
    dailyDealImg.src = dailyDeal.img;
    const dailyDealImgCredits = document.createElement('small');
    dailyDealImgCredits.innerHTML = dailyDeal.imgCredits;
    const dailyDealTitle = document.createElement('h3');
    dailyDealTitle.textContent = dailyDeal.name;
    const dailyDealAle = document.createElement('h4');
    dailyDealAle.textContent = 'Daily Deal -20% off!';
    const dailyDealDesc = document.createElement('p');
    dailyDealDesc.textContent = dailyDeal.desc;
    const dailyDealPrice = document.createElement('p');
    dailyDealPrice.textContent = dailyDeal.price * 0.80 + "€";

    const dailydealCardeTexts = document.createElement('div');
    dailydealCardeTexts.classList.add('daily-deal-text');

    dailydealCardeTexts.appendChild(dailyDealImgCredits);
    dailydealCardeTexts.appendChild(dailyDealTitle);
    dailydealCardeTexts.appendChild(dailyDealDesc);
    dailydealCardeTexts.appendChild(dailyDealPrice);
    dailydealCardeTexts.appendChild(dailyDealAle);

    dailyDealCard.appendChild(dailyDealImg);
    dailyDealCard.appendChild(dailydealCardeTexts);

    menu.appendChild(h2);
    menu.appendChild(dailyDealCard);
    menu.appendChild(menuWrapper);

    return menu;
};

function getDailyDeal(foodItems) {
    switch(getDay()) {
        case 'Sunday':
            return foodItems[3];
        break;
        case 'Monday':
            return foodItems[4];
        break;
        case 'Tuesday':
            return foodItems[5];
        break;
        case 'Wednesday':
            return foodItems[6];
        break;
        case 'Thursday':
            return foodItems[7];
        break;
        case 'Friday':
            return foodItems[8];
        break;
        case 'Saturday':
            return foodItems[9];
        break;
    }
}