/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
function Contact() {
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

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getDay": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/restaurant.jpg */ "./src/img/restaurant.jpg");


function Home() {
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
    img.src = _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
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

function getDay() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    return weekday[d.getDay()];
};

function getHours() {
    const d = new Date();
    return d.getHours();
};

/***/ }),

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _img_nachos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/nachos.jpg */ "./src/img/nachos.jpg");
/* harmony import */ var _img_nachoplate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/nachoplate.jpg */ "./src/img/nachoplate.jpg");
/* harmony import */ var _img_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mozzarella.jpg */ "./src/img/mozzarella.jpg");
/* harmony import */ var _img_cheesebrg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cheesebrg.jpg */ "./src/img/cheesebrg.jpg");
/* harmony import */ var _img_baconbrg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/baconbrg.jpg */ "./src/img/baconbrg.jpg");
/* harmony import */ var _img_chickenbrg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/chickenbrg.jpg */ "./src/img/chickenbrg.jpg");
/* harmony import */ var _img_halloum_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/halloum.jpg */ "./src/img/halloum.jpg");
/* harmony import */ var _img_chevre_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/chevre.jpg */ "./src/img/chevre.jpg");
/* harmony import */ var _img_chickensalad_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/chickensalad.jpg */ "./src/img/chickensalad.jpg");
/* harmony import */ var _img_salmongrill_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/salmongrill.jpg */ "./src/img/salmongrill.jpg");
/* harmony import */ var _img_steak_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/steak.jpg */ "./src/img/steak.jpg");
/* harmony import */ var _img_chickenGrill_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/chickenGrill.jpg */ "./src/img/chickenGrill.jpg");
/* harmony import */ var _img_icecream_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/icecream.jpg */ "./src/img/icecream.jpg");
/* harmony import */ var _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/sorbet.jpg */ "./src/img/sorbet.jpg");
/* harmony import */ var _img_fondant_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/fondant.jpg */ "./src/img/fondant.jpg");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home */ "./src/pages/Home.js");

















function Menu() {
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

    const starter1 = new Food('starter', 'Nachos', 'With a side of salsa dip', 4.20, _img_nachos_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Photo by <a href="https://unsplash.com/@coffeefyworkafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Coffeefy Workafe</a>');
    const starter2 = new Food('starter', 'Nacho Plate', 'Nachos, House guacamole, salsa, French cream, warm cheese sauce, jalapenos', 10.90, _img_nachoplate_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Photo by <a href="https://unsplash.com/@courtneymcook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Courtney Cook</a>');
    const starter3 = new Food('starter', 'Mozzarella Sticks', 'With a side of Salad and garlic dip.', 7.90, _img_mozzarella_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Photo by <a href="https://unsplash.com/@kapoorparas28?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paras Kapoor</a>');
    const burger1 = new Food('burger', 'Cheese Hamburger', 'Hamburger with cheese', 14.90, _img_cheesebrg_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a>');
    const burger2 = new Food('burger', 'Bacon Hamburger', 'Hamburger with bacon', 14.90, _img_baconbrg_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Photo by <a href="https://unsplash.com/es/@fifernando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fidel Fernando</a>');
    const burger3 = new Food('burger', 'Chicken Hamburger', 'Hamburger with chicken', 14.90, _img_chickenbrg_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Didi Miam</a>');
    const salad1 = new Food('salad', 'Halloum', 'Salad with halloum', 16.90, _img_halloum_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Photo by <a href="https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dovile Ramoskaite</a>');
    const salad2 = new Food('salad', 'Chevre', 'Salad with Chevre', 16.90, _img_chevre_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Photo by <a href="https://unsplash.com/@eatoutcologne?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">EAT OUT COLOGNE</a>');
    const salad3 = new Food('salad', 'Chicken', 'Salad with Chicken', 16.90, _img_chickensalad_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Photo by <a href="https://unsplash.com/es/@fallonmichaeltx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fallon Michael</a>');
    const grill1 = new Food('grill', 'Salmon', 'Salmon with vegetables and potatoes in sauce', 25.50, _img_salmongrill_jpg__WEBPACK_IMPORTED_MODULE_9__, 'Photo by <a href="https://unsplash.com/ja/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile dot com</a>');
    const grill2 = new Food('grill', 'Steak', 'Steak with vegetables and potatoes in sauce', 26.90, _img_steak_jpg__WEBPACK_IMPORTED_MODULE_10__, 'Photo by <a href="https://unsplash.com/@covertnine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Toomey</a>');
    const grill3 = new Food('grill', 'Chicken', 'Chicken with vegetables and potatoes in sauce', 21.50, _img_chickenGrill_jpg__WEBPACK_IMPORTED_MODULE_11__, 'Photo by <a href="https://unsplash.com/@tempestdesigner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark DeYoung</a>');
    const dessert1 = new Food('dessert', 'Ice cream', 'Vanilla Ice Cream with suprise sauce', 7.90, _img_icecream_jpg__WEBPACK_IMPORTED_MODULE_12__, 'Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a>');
    const dessert2 = new Food('dessert', 'Sorbet', 'Melon sorbet with love', 3.90, _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_13__, 'Photo by <a href="https://unsplash.com/@honeypoppet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandie Clarke</a>');
    const dessert3 = new Food('dessert', 'Chocolate Fondant', 'Comfort treat with vanilla ice cream', 8.50, _img_fondant_jpg__WEBPACK_IMPORTED_MODULE_14__, 'Photo by <a href="https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Griss</a>');

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
    switch((0,_Home__WEBPACK_IMPORTED_MODULE_15__.getDay)()) {
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

/***/ }),

/***/ "./src/img/baconbrg.jpg":
/*!******************************!*\
  !*** ./src/img/baconbrg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29d2983c6e7523716c11.jpg";

/***/ }),

/***/ "./src/img/cheesebrg.jpg":
/*!*******************************!*\
  !*** ./src/img/cheesebrg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a932085458b215b062de.jpg";

/***/ }),

/***/ "./src/img/chevre.jpg":
/*!****************************!*\
  !*** ./src/img/chevre.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16ac957cd28e909b28c1.jpg";

/***/ }),

/***/ "./src/img/chickenGrill.jpg":
/*!**********************************!*\
  !*** ./src/img/chickenGrill.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "639255a6cb1e17f80cc5.jpg";

/***/ }),

/***/ "./src/img/chickenbrg.jpg":
/*!********************************!*\
  !*** ./src/img/chickenbrg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26782be5ad131daabd63.jpg";

/***/ }),

/***/ "./src/img/chickensalad.jpg":
/*!**********************************!*\
  !*** ./src/img/chickensalad.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67059487eb9d9cf82690.jpg";

/***/ }),

/***/ "./src/img/fondant.jpg":
/*!*****************************!*\
  !*** ./src/img/fondant.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13e1475968a95ff831ac.jpg";

/***/ }),

/***/ "./src/img/halloum.jpg":
/*!*****************************!*\
  !*** ./src/img/halloum.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0e01facbbb0cfdd29e9.jpg";

/***/ }),

/***/ "./src/img/icecream.jpg":
/*!******************************!*\
  !*** ./src/img/icecream.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f41487c2197fb2c0d51a.jpg";

/***/ }),

/***/ "./src/img/mozzarella.jpg":
/*!********************************!*\
  !*** ./src/img/mozzarella.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "540d20e23929a984c1ea.jpg";

/***/ }),

/***/ "./src/img/nachoplate.jpg":
/*!********************************!*\
  !*** ./src/img/nachoplate.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de4fabd3cc1a562cb28.jpg";

/***/ }),

/***/ "./src/img/nachos.jpg":
/*!****************************!*\
  !*** ./src/img/nachos.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91afa1a3031421d6dcea.jpg";

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496eb3fe4d69e349dbe8.jpg";

/***/ }),

/***/ "./src/img/salmongrill.jpg":
/*!*********************************!*\
  !*** ./src/img/salmongrill.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7975475c2145f015e2ec.jpg";

/***/ }),

/***/ "./src/img/sorbet.jpg":
/*!****************************!*\
  !*** ./src/img/sorbet.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8689970bdc68ecc419b8.jpg";

/***/ }),

/***/ "./src/img/steak.jpg":
/*!***************************!*\
  !*** ./src/img/steak.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fd05b740fe44dcf8e87.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Menu */ "./src/pages/Menu.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Contact */ "./src/pages/Contact.js");




function view() {

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
                    main.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"])());
                    navBtn.classList.add('active');
                break;
                case 'Menu':
                    removeChild(main);
                    main.appendChild((0,_pages_Menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
                    navBtn.classList.add('active');
                break;
                case 'Contact':
                    removeChild(main);
                    main.appendChild((0,_pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
                    navBtn.classList.add('active');
                break;
                default:
                    removeChild(main);
                    main.appendChild((0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"])());
                    navBtn.classList.add('active');
                break;
            }
        });
    });

    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    h1.textContent = 'The Internet Restaurant';
    
    header.appendChild(h1);

    main.appendChild((0,_pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnQztBQUNBO0FBQ007O0FBRXZCOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1REFBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1REFBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwREFBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1REFBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMERBQU87QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZXMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9ICdXZSBhcmUgb3BlbiBldmVyeSBkYXkgZnJvbSAxMiB0byAyMCEnO1xuXG4gICAgY29uc3QgaW5mb1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvV3JhcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdWYWFzYW5wdWlzdGlra28gOCwgNjUxMDAgVmFhc2EnO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnNjY2IDY2NiA2NjYnO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnaW50ZXJuZXRyZXN0YXVyYW50QG5vdHJlYWwuZmknO1xuXG4gICAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgaW5mb1dyYXAuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGluZm9XcmFwLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG1hcC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTgwNS41MTMxNTA5ODEwMjU4ITJkMjEuNjA5ODU2OTkxMTEzNjIhM2Q2My4wOTM4NjY5MTA4OTM3MiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDY3ZDYwNDJjZTAyMjZiNyUzQTB4ZTAwMDZjZTYxOWY2ODI2ZCEyc1ZhYXNhbnB1aXN0aWtrbyUyMDglMkMlMjA2NTEwMCUyMFZhYXNhITVlMCEzbTIhMXNmaSEyc2ZpITR2MTY2NDM4MjQwNjk1MiE1bTIhMXNmaSEyc2ZpJztcbiAgICBtYXAubG9hZGluZyA9ICdsYXp5JztcblxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGgyKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChoMyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChpbmZvV3JhcCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59OyIsImltcG9ydCByZXN0YXVyYW50SW1nIGZyb20gJy4uL2ltZy9yZXN0YXVyYW50LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgLy8gUGFnZSBUaXRsZVxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gICAgLy8gV2VsY29tZSB0ZXh0XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gSW50ZXJuZXQgcmVzdGF1cmFudCEgJHtnZXRIb3VycygpID4gMTIgJiYgZ2V0SG91cnMoKSA8IDIwID8gJ1dlIGFyZSBjdXJyZW50bHkgb3BlbiEnIDogJ1dlIGFyZSBjbG9zZWQgYXQgdGhlIG1vbWVudCEnfSBIYXZlIGEgZ29vZCAke2dldERheSgpfWA7XG5cbiAgICBjb25zdCB3ZWxjb21lQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lQmxvY2suY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gICAgd2VsY29tZUJsb2NrLmFwcGVuZENoaWxkKGgyKTtcbiAgICB3ZWxjb21lQmxvY2suYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgLy8gUmVzdGF1cmFudCBpbWFnZVxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSByZXN0YXVyYW50SW1nO1xuICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgLy8gSW5mbyB0ZXh0XG4gICAgY29uc3QgZmlnY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnVGhlIGludGVybmV0IHJlc3RhdXJhbnQgaXMgbm90IGEgbm9ybWFsIHJlc3RhdXJhbnQgYXMgaXRzIG9ubHkgbG9jYXRpb24gaXMgb24gdGhlIGludGVybmV0LiBZb3UgY2FuIHZpZXcgb3VyIGRlbGljaW91cyBkaXNoZXMgb24gdGhlIE1lbnUgcGFnZSwgYnV0IHVuZm9ydHVuYXRlbHkgeW91IGNhbnQgb3JkZXIgdGhlbSBhcyB3ZSBkb250IHJlYWxseSBleGlzdC4nO1xuICAgIGZpZ2NhcHRpb24uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBcbiAgICBob21lLmFwcGVuZENoaWxkKHdlbGNvbWVCbG9jayk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChmaWd1cmUpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZmlnY2FwdGlvbik7XG5cbiAgICByZXR1cm4gaG9tZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoKSB7XG4gICAgY29uc3Qgd2Vla2RheSA9IFtcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB3ZWVrZGF5W2QuZ2V0RGF5KCldO1xufTtcblxuZnVuY3Rpb24gZ2V0SG91cnMoKSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGQuZ2V0SG91cnMoKTtcbn07IiwiaW1wb3J0IG5hY2hvc0ltZyBmcm9tICcuLi9pbWcvbmFjaG9zLmpwZyc7XG5pbXBvcnQgbmFjaG9wbGF0ZUltZyBmcm9tICcuLi9pbWcvbmFjaG9wbGF0ZS5qcGcnO1xuaW1wb3J0IG1venphcmVsbGFJbWcgZnJvbSAnLi4vaW1nL21venphcmVsbGEuanBnJztcbmltcG9ydCBjaGVlc2VCcmdJbWcgZnJvbSAnLi4vaW1nL2NoZWVzZWJyZy5qcGcnO1xuaW1wb3J0IGJhY29uQnJnSW1nIGZyb20gJy4uL2ltZy9iYWNvbmJyZy5qcGcnO1xuaW1wb3J0IGNoaWNrZW5CcmdJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5icmcuanBnJztcbmltcG9ydCBoYWxsb3VtSW1nIGZyb20gJy4uL2ltZy9oYWxsb3VtLmpwZyc7XG5pbXBvcnQgY2hldnJlSW1nIGZyb20gJy4uL2ltZy9jaGV2cmUuanBnJztcbmltcG9ydCBjaGlja2VuU2FsYWRJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5zYWxhZC5qcGcnO1xuaW1wb3J0IHNhbG1vbkltZyBmcm9tICcuLi9pbWcvc2FsbW9uZ3JpbGwuanBnJztcbmltcG9ydCBzdGVha0ltZyBmcm9tICcuLi9pbWcvc3RlYWsuanBnJztcbmltcG9ydCBjaGlja2VuR3JpbGxJbWcgZnJvbSAnLi4vaW1nL2NoaWNrZW5HcmlsbC5qcGcnO1xuaW1wb3J0IGljZUNyZWFtSW1nIGZyb20gJy4uL2ltZy9pY2VjcmVhbS5qcGcnO1xuaW1wb3J0IHNvcmJldEltZyBmcm9tICcuLi9pbWcvc29yYmV0LmpwZyc7XG5pbXBvcnQgZm9uZGFudEltZyBmcm9tICcuLi9pbWcvZm9uZGFudC5qcGcnO1xuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgICBsZXQgZm9vZEl0ZW1zID0gW107XG5cbiAgICBjbGFzcyBGb29kIHtcbiAgICAgICAgY29uc3RydWN0b3IoY2F0ZWdvcnksIG5hbWUsIGRlc2MsIHByaWNlLCBpbWcsIGltZ0NyZWRpdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgICAgICAgICB0aGlzLmltZ0NyZWRpdHMgPSBpbWdDcmVkaXRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRlcjEgPSBuZXcgRm9vZCgnc3RhcnRlcicsICdOYWNob3MnLCAnV2l0aCBhIHNpZGUgb2Ygc2Fsc2EgZGlwJywgNC4yMCwgbmFjaG9zSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bjb2ZmZWVmeXdvcmthZmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Q29mZmVlZnkgV29ya2FmZTwvYT4nKTtcbiAgICBjb25zdCBzdGFydGVyMiA9IG5ldyBGb29kKCdzdGFydGVyJywgJ05hY2hvIFBsYXRlJywgJ05hY2hvcywgSG91c2UgZ3VhY2Ftb2xlLCBzYWxzYSwgRnJlbmNoIGNyZWFtLCB3YXJtIGNoZWVzZSBzYXVjZSwgamFsYXBlbm9zJywgMTAuOTAsIG5hY2hvcGxhdGVJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNvdXJ0bmV5bWNvb2s/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Q291cnRuZXkgQ29vazwvYT4nKTtcbiAgICBjb25zdCBzdGFydGVyMyA9IG5ldyBGb29kKCdzdGFydGVyJywgJ01venphcmVsbGEgU3RpY2tzJywgJ1dpdGggYSBzaWRlIG9mIFNhbGFkIGFuZCBnYXJsaWMgZGlwLicsIDcuOTAsIG1venphcmVsbGFJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGthcG9vcnBhcmFzMjg/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+UGFyYXMgS2Fwb29yPC9hPicpO1xuICAgIGNvbnN0IGJ1cmdlcjEgPSBuZXcgRm9vZCgnYnVyZ2VyJywgJ0NoZWVzZSBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggY2hlZXNlJywgMTQuOTAsIGNoZWVzZUJyZ0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW1pcl92X2FsaT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5hbWlyYWxpIG1pcmhhc2hlbWlhbjwvYT4nKTtcbiAgICBjb25zdCBidXJnZXIyID0gbmV3IEZvb2QoJ2J1cmdlcicsICdCYWNvbiBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggYmFjb24nLCAxNC45MCwgYmFjb25CcmdJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQGZpZmVybmFuZG8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RmlkZWwgRmVybmFuZG88L2E+Jyk7XG4gICAgY29uc3QgYnVyZ2VyMyA9IG5ldyBGb29kKCdidXJnZXInLCAnQ2hpY2tlbiBIYW1idXJnZXInLCAnSGFtYnVyZ2VyIHdpdGggY2hpY2tlbicsIDE0LjkwLCBjaGlja2VuQnJnSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BkaWxqYTk2P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkRpZGkgTWlhbTwvYT4nKTtcbiAgICBjb25zdCBzYWxhZDEgPSBuZXcgRm9vZCgnc2FsYWQnLCAnSGFsbG91bScsICdTYWxhZCB3aXRoIGhhbGxvdW0nLCAxNi45MCwgaGFsbG91bUltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZG92aWxlcm0/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RG92aWxlIFJhbW9za2FpdGU8L2E+Jyk7XG4gICAgY29uc3Qgc2FsYWQyID0gbmV3IEZvb2QoJ3NhbGFkJywgJ0NoZXZyZScsICdTYWxhZCB3aXRoIENoZXZyZScsIDE2LjkwLCBjaGV2cmVJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGVhdG91dGNvbG9nbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RUFUIE9VVCBDT0xPR05FPC9hPicpO1xuICAgIGNvbnN0IHNhbGFkMyA9IG5ldyBGb29kKCdzYWxhZCcsICdDaGlja2VuJywgJ1NhbGFkIHdpdGggQ2hpY2tlbicsIDE2LjkwLCBjaGlja2VuU2FsYWRJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQGZhbGxvbm1pY2hhZWx0eD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5GYWxsb24gTWljaGFlbDwvYT4nKTtcbiAgICBjb25zdCBncmlsbDEgPSBuZXcgRm9vZCgnZ3JpbGwnLCAnU2FsbW9uJywgJ1NhbG1vbiB3aXRoIHZlZ2V0YWJsZXMgYW5kIHBvdGF0b2VzIGluIHNhdWNlJywgMjUuNTAsIHNhbG1vbkltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9qYS9AbWljaGVpbGU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+bWljaGVpbGUgZG90IGNvbTwvYT4nKTtcbiAgICBjb25zdCBncmlsbDIgPSBuZXcgRm9vZCgnZ3JpbGwnLCAnU3RlYWsnLCAnU3RlYWsgd2l0aCB2ZWdldGFibGVzIGFuZCBwb3RhdG9lcyBpbiBzYXVjZScsIDI2LjkwLCBzdGVha0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY292ZXJ0bmluZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5UaW0gVG9vbWV5PC9hPicpO1xuICAgIGNvbnN0IGdyaWxsMyA9IG5ldyBGb29kKCdncmlsbCcsICdDaGlja2VuJywgJ0NoaWNrZW4gd2l0aCB2ZWdldGFibGVzIGFuZCBwb3RhdG9lcyBpbiBzYXVjZScsIDIxLjUwLCBjaGlja2VuR3JpbGxJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHRlbXBlc3RkZXNpZ25lcj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5NYXJrIERlWW91bmc8L2E+Jyk7XG4gICAgY29uc3QgZGVzc2VydDEgPSBuZXcgRm9vZCgnZGVzc2VydCcsICdJY2UgY3JlYW0nLCAnVmFuaWxsYSBJY2UgQ3JlYW0gd2l0aCBzdXByaXNlIHNhdWNlJywgNy45MCwgaWNlQ3JlYW1JbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNoYXJsZXNkZWx1dmlvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPmNoYXJsZXNkZWx1dmlvPC9hPicpO1xuICAgIGNvbnN0IGRlc3NlcnQyID0gbmV3IEZvb2QoJ2Rlc3NlcnQnLCAnU29yYmV0JywgJ01lbG9uIHNvcmJldCB3aXRoIGxvdmUnLCAzLjkwLCBzb3JiZXRJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGhvbmV5cG9wcGV0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlNhbmRpZSBDbGFya2U8L2E+Jyk7XG4gICAgY29uc3QgZGVzc2VydDMgPSBuZXcgRm9vZCgnZGVzc2VydCcsICdDaG9jb2xhdGUgRm9uZGFudCcsICdDb21mb3J0IHRyZWF0IHdpdGggdmFuaWxsYSBpY2UgY3JlYW0nLCA4LjUwLCBmb25kYW50SW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bncmlzc2tpdGNoZW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TWF4IEdyaXNzPC9hPicpO1xuXG4gICAgZm9vZEl0ZW1zLnB1c2goc3RhcnRlcjEpO1xuICAgIGZvb2RJdGVtcy5wdXNoKHN0YXJ0ZXIyKTtcbiAgICBmb29kSXRlbXMucHVzaChzdGFydGVyMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMSk7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMik7XG4gICAgZm9vZEl0ZW1zLnB1c2goYnVyZ2VyMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goc2FsYWQxKTtcbiAgICBmb29kSXRlbXMucHVzaChzYWxhZDIpO1xuICAgIGZvb2RJdGVtcy5wdXNoKHNhbGFkMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goZ3JpbGwxKTtcbiAgICBmb29kSXRlbXMucHVzaChncmlsbDIpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGdyaWxsMyk7XG4gICAgZm9vZEl0ZW1zLnB1c2goZGVzc2VydDEpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGRlc3NlcnQyKTtcbiAgICBmb29kSXRlbXMucHVzaChkZXNzZXJ0Myk7XG5cbiAgICBjb25zb2xlLmxvZyhmb29kSXRlbXNbMF0uY2F0ZWdvcnkpXG5cbiAgICBjb25zdCBzdGFydGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0ZXJXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnRlcnMnKTtcbiAgICBjb25zdCBidXJnZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1cmdlcnMnKTtcbiAgICBjb25zdCBzYWxhZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWxhZFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzYWxhZHMnKTtcbiAgICBjb25zdCBncmlsbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlsbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdncmlsbHMnKTtcbiAgICBjb25zdCBkZXNzZXJ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc3NlcnRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzc2VydHMnKTtcblxuICAgIGxldCBzdGFydGVycyA9ICcnO1xuICAgIGxldCBidXJnZXJzID0gJyc7XG4gICAgbGV0IHNhbGFkcyA9ICcnO1xuICAgIGxldCBncmlsbHMgPSAnJztcbiAgICBsZXQgZGVzc2VydHMgPSAnJztcblxuICAgIGZvb2RJdGVtcy5mb3JFYWNoKGZvb2QgPT4ge1xuICAgICAgICBzd2l0Y2goZm9vZC5jYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgc3RhcnRlcnMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnVyZ2VyJzpcbiAgICAgICAgICAgICAgICBidXJnZXJzICs9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtmb29kLmNhdGVnb3J5fVwiIGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm9vZC5pbWd9XCIgYWx0PVwiJHtmb29kLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmb29kLmltZ0NyZWRpdHN9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb29kLXRpdGxlXCI+JHtmb29kLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtZGVzY1wiPiR7Zm9vZC5kZXNjfTxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1wcmljZVwiPiR7Zm9vZC5wcmljZX3igqw8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NhbGFkJzpcbiAgICAgICAgICAgICAgICBzYWxhZHMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ3JpbGwnOlxuICAgICAgICAgICAgICAgIGdyaWxscyArPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7Zm9vZC5jYXRlZ29yeX1cIiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Zvb2QuaW1nfVwiIGFsdD1cIiR7Zm9vZC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm9vZC5pbWdDcmVkaXRzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9vZC10aXRsZVwiPiR7Zm9vZC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWRlc2NcIj4ke2Zvb2QuZGVzY308cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtcHJpY2VcIj4ke2Zvb2QucHJpY2V94oKsPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBkZXNzZXJ0cyArPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7Zm9vZC5jYXRlZ29yeX1cIiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Zvb2QuaW1nfVwiIGFsdD1cIiR7Zm9vZC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm9vZC5pbWdDcmVkaXRzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9vZC10aXRsZVwiPiR7Zm9vZC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWRlc2NcIj4ke2Zvb2QuZGVzY308cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtcHJpY2VcIj4ke2Zvb2QucHJpY2V94oKsPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YXJ0ZXJXcmFwcGVyLmlubmVySFRNTCA9IHN0YXJ0ZXJzO1xuICAgIGJ1cmdlcldyYXBwZXIuaW5uZXJIVE1MID0gYnVyZ2VycztcbiAgICBzYWxhZFdyYXBwZXIuaW5uZXJIVE1MID0gc2FsYWRzO1xuICAgIGdyaWxsV3JhcHBlci5pbm5lckhUTUwgPSBncmlsbHM7XG4gICAgZGVzc2VydFdyYXBwZXIuaW5uZXJIVE1MID0gZGVzc2VydHM7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IHN0YXJ0ZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN0YXJ0ZXJzVGl0bGUudGV4dENvbnRlbnQgPSAnU3RhcnRlcnMnO1xuICAgIGNvbnN0IGJ1cmdlcnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYnVyZ2Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0J1cmdlcnMnO1xuICAgIGNvbnN0IHNhbGFkc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzYWxhZHNUaXRsZS50ZXh0Q29udGVudCA9ICdTYWxhZHMnO1xuICAgIGNvbnN0IGdyaWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGdyaWxsVGl0bGUudGV4dENvbnRlbnQgPSAnRnJvbSB0aGUgR3JpbGwnO1xuICAgIGNvbnN0IGRlc3NlcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGVzc2VydFRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJztcblxuICAgIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJyk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhcnRlcnNUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RhcnRlcldyYXBwZXIpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGJ1cmdlcnNUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyV3JhcHBlcik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2FsYWRzVGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHNhbGFkV3JhcHBlcik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpbGxUaXRsZSk7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ3JpbGxXcmFwcGVyKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChkZXNzZXJ0VGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGRlc3NlcnRXcmFwcGVyKTtcblxuICAgIGNvbnN0IGRhaWx5RGVhbCA9IGdldERhaWx5RGVhbChmb29kSXRlbXMpO1xuICAgIGNvbnN0IGRhaWx5RGVhbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYWlseURlYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWRlYWwnKTtcblxuICAgIGNvbnN0IGRhaWx5RGVhbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRhaWx5RGVhbEltZy5zcmMgPSBkYWlseURlYWwuaW1nO1xuICAgIGNvbnN0IGRhaWx5RGVhbEltZ0NyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIGRhaWx5RGVhbEltZ0NyZWRpdHMuaW5uZXJIVE1MID0gZGFpbHlEZWFsLmltZ0NyZWRpdHM7XG4gICAgY29uc3QgZGFpbHlEZWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRhaWx5RGVhbFRpdGxlLnRleHRDb250ZW50ID0gZGFpbHlEZWFsLm5hbWU7XG4gICAgY29uc3QgZGFpbHlEZWFsQWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBkYWlseURlYWxBbGUudGV4dENvbnRlbnQgPSAnRGFpbHkgRGVhbCAtMjAlIG9mZiEnO1xuICAgIGNvbnN0IGRhaWx5RGVhbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGFpbHlEZWFsRGVzYy50ZXh0Q29udGVudCA9IGRhaWx5RGVhbC5kZXNjO1xuICAgIGNvbnN0IGRhaWx5RGVhbFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhaWx5RGVhbFByaWNlLnRleHRDb250ZW50ID0gZGFpbHlEZWFsLnByaWNlICogMC44MCArIFwi4oKsXCI7XG5cbiAgICBjb25zdCBkYWlseWRlYWxDYXJkZVRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5jbGFzc0xpc3QuYWRkKCdkYWlseS1kZWFsLXRleHQnKTtcblxuICAgIGRhaWx5ZGVhbENhcmRlVGV4dHMuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsSW1nQ3JlZGl0cyk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxUaXRsZSk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxEZXNjKTtcbiAgICBkYWlseWRlYWxDYXJkZVRleHRzLmFwcGVuZENoaWxkKGRhaWx5RGVhbFByaWNlKTtcbiAgICBkYWlseWRlYWxDYXJkZVRleHRzLmFwcGVuZENoaWxkKGRhaWx5RGVhbEFsZSk7XG5cbiAgICBkYWlseURlYWxDYXJkLmFwcGVuZENoaWxkKGRhaWx5RGVhbEltZyk7XG4gICAgZGFpbHlEZWFsQ2FyZC5hcHBlbmRDaGlsZChkYWlseWRlYWxDYXJkZVRleHRzKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsQ2FyZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51V3JhcHBlcik7XG5cbiAgICByZXR1cm4gbWVudTtcbn07XG5cbmZ1bmN0aW9uIGdldERhaWx5RGVhbChmb29kSXRlbXMpIHtcbiAgICBzd2l0Y2goZ2V0RGF5KCkpIHtcbiAgICAgICAgY2FzZSAnU3VuZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbM107XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNb25kYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s0XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1R1ZXNkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s1XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1dlZG5lc2RheSc6XG4gICAgICAgICAgICByZXR1cm4gZm9vZEl0ZW1zWzZdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVGh1cnNkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s3XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ZyaWRheSc6XG4gICAgICAgICAgICByZXR1cm4gZm9vZEl0ZW1zWzhdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2F0dXJkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s5XTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3BhZ2VzL01lbnUnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9wYWdlcy9Db250YWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlldygpIHtcblxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICBcbiAgICBjb25zdCBuYXZCdG5zID0gW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dO1xuXG4gICAgbmF2QnRucy5mb3JFYWNoKG5hdkJ0biA9PiB7XG4gICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2ZShuYXZCdG5zKTtcblxuICAgICAgICAgICAgc3dpdGNoKG5hdkJ0bi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZChtYWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChIb21lKCkpO1xuICAgICAgICAgICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKE1lbnUoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoQ29udGFjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKEhvbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICBoMS50ZXh0Q29udGVudCA9ICdUaGUgSW50ZXJuZXQgUmVzdGF1cmFudCc7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoQ29udGFjdCgpKTtcbiAgICB2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdmlldy5hcHBlbmRDaGlsZChuYXYpO1xuICAgIHZpZXcuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICByZXR1cm4gdmlld1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKG5hdkJ0bnMpIHtcblxuICAgIG5hdkJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9