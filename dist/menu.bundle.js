/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZXMvTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzdGF1cmFudEltZyBmcm9tICcuLi9pbWcvcmVzdGF1cmFudC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIC8vIFBhZ2UgVGl0bGVcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIC8vIFdlbGNvbWUgdGV4dFxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIEludGVybmV0IHJlc3RhdXJhbnQhICR7Z2V0SG91cnMoKSA+IDEyICYmIGdldEhvdXJzKCkgPCAyMCA/ICdXZSBhcmUgY3VycmVudGx5IG9wZW4hJyA6ICdXZSBhcmUgY2xvc2VkIGF0IHRoZSBtb21lbnQhJ30gSGF2ZSBhIGdvb2QgJHtnZXREYXkoKX1gO1xuXG4gICAgY29uc3Qgd2VsY29tZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICAgIHdlbGNvbWVCbG9jay5hcHBlbmRDaGlsZChoMik7XG4gICAgd2VsY29tZUJsb2NrLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIC8vIFJlc3RhdXJhbnQgaW1hZ2VcbiAgICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gcmVzdGF1cmFudEltZztcbiAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIC8vIEluZm8gdGV4dFxuICAgIGNvbnN0IGZpZ2NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ1RoZSBpbnRlcm5ldCByZXN0YXVyYW50IGlzIG5vdCBhIG5vcm1hbCByZXN0YXVyYW50IGFzIGl0cyBvbmx5IGxvY2F0aW9uIGlzIG9uIHRoZSBpbnRlcm5ldC4gWW91IGNhbiB2aWV3IG91ciBkZWxpY2lvdXMgZGlzaGVzIG9uIHRoZSBNZW51IHBhZ2UsIGJ1dCB1bmZvcnR1bmF0ZWx5IHlvdSBjYW50IG9yZGVyIHRoZW0gYXMgd2UgZG9udCByZWFsbHkgZXhpc3QuJztcbiAgICBmaWdjYXB0aW9uLmFwcGVuZENoaWxkKHApO1xuXG4gICAgXG4gICAgaG9tZS5hcHBlbmRDaGlsZCh3ZWxjb21lQmxvY2spO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZmlndXJlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGZpZ2NhcHRpb24pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KCkge1xuICAgIGNvbnN0IHdlZWtkYXkgPSBbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXTtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gd2Vla2RheVtkLmdldERheSgpXTtcbn07XG5cbmZ1bmN0aW9uIGdldEhvdXJzKCkge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBkLmdldEhvdXJzKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBuYWNob3NJbWcgZnJvbSAnLi4vaW1nL25hY2hvcy5qcGcnO1xuaW1wb3J0IG5hY2hvcGxhdGVJbWcgZnJvbSAnLi4vaW1nL25hY2hvcGxhdGUuanBnJztcbmltcG9ydCBtb3p6YXJlbGxhSW1nIGZyb20gJy4uL2ltZy9tb3p6YXJlbGxhLmpwZyc7XG5pbXBvcnQgY2hlZXNlQnJnSW1nIGZyb20gJy4uL2ltZy9jaGVlc2VicmcuanBnJztcbmltcG9ydCBiYWNvbkJyZ0ltZyBmcm9tICcuLi9pbWcvYmFjb25icmcuanBnJztcbmltcG9ydCBjaGlja2VuQnJnSW1nIGZyb20gJy4uL2ltZy9jaGlja2VuYnJnLmpwZyc7XG5pbXBvcnQgaGFsbG91bUltZyBmcm9tICcuLi9pbWcvaGFsbG91bS5qcGcnO1xuaW1wb3J0IGNoZXZyZUltZyBmcm9tICcuLi9pbWcvY2hldnJlLmpwZyc7XG5pbXBvcnQgY2hpY2tlblNhbGFkSW1nIGZyb20gJy4uL2ltZy9jaGlja2Vuc2FsYWQuanBnJztcbmltcG9ydCBzYWxtb25JbWcgZnJvbSAnLi4vaW1nL3NhbG1vbmdyaWxsLmpwZyc7XG5pbXBvcnQgc3RlYWtJbWcgZnJvbSAnLi4vaW1nL3N0ZWFrLmpwZyc7XG5pbXBvcnQgY2hpY2tlbkdyaWxsSW1nIGZyb20gJy4uL2ltZy9jaGlja2VuR3JpbGwuanBnJztcbmltcG9ydCBpY2VDcmVhbUltZyBmcm9tICcuLi9pbWcvaWNlY3JlYW0uanBnJztcbmltcG9ydCBzb3JiZXRJbWcgZnJvbSAnLi4vaW1nL3NvcmJldC5qcGcnO1xuaW1wb3J0IGZvbmRhbnRJbWcgZnJvbSAnLi4vaW1nL2ZvbmRhbnQuanBnJztcbmltcG9ydCB7IGdldERheSB9IGZyb20gJy4vSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgbGV0IGZvb2RJdGVtcyA9IFtdO1xuXG4gICAgY2xhc3MgRm9vZCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGNhdGVnb3J5LCBuYW1lLCBkZXNjLCBwcmljZSwgaW1nLCBpbWdDcmVkaXRzKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICAgICAgdGhpcy5pbWdDcmVkaXRzID0gaW1nQ3JlZGl0cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ZXIxID0gbmV3IEZvb2QoJ3N0YXJ0ZXInLCAnTmFjaG9zJywgJ1dpdGggYSBzaWRlIG9mIHNhbHNhIGRpcCcsIDQuMjAsIG5hY2hvc0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY29mZmVlZnl3b3JrYWZlP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkNvZmZlZWZ5IFdvcmthZmU8L2E+Jyk7XG4gICAgY29uc3Qgc3RhcnRlcjIgPSBuZXcgRm9vZCgnc3RhcnRlcicsICdOYWNobyBQbGF0ZScsICdOYWNob3MsIEhvdXNlIGd1YWNhbW9sZSwgc2Fsc2EsIEZyZW5jaCBjcmVhbSwgd2FybSBjaGVlc2Ugc2F1Y2UsIGphbGFwZW5vcycsIDEwLjkwLCBuYWNob3BsYXRlSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bjb3VydG5leW1jb29rP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkNvdXJ0bmV5IENvb2s8L2E+Jyk7XG4gICAgY29uc3Qgc3RhcnRlcjMgPSBuZXcgRm9vZCgnc3RhcnRlcicsICdNb3p6YXJlbGxhIFN0aWNrcycsICdXaXRoIGEgc2lkZSBvZiBTYWxhZCBhbmQgZ2FybGljIGRpcC4nLCA3LjkwLCBtb3p6YXJlbGxhSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BrYXBvb3JwYXJhczI4P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlBhcmFzIEthcG9vcjwvYT4nKTtcbiAgICBjb25zdCBidXJnZXIxID0gbmV3IEZvb2QoJ2J1cmdlcicsICdDaGVlc2UgSGFtYnVyZ2VyJywgJ0hhbWJ1cmdlciB3aXRoIGNoZWVzZScsIDE0LjkwLCBjaGVlc2VCcmdJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFtaXJfdl9hbGk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+YW1pcmFsaSBtaXJoYXNoZW1pYW48L2E+Jyk7XG4gICAgY29uc3QgYnVyZ2VyMiA9IG5ldyBGb29kKCdidXJnZXInLCAnQmFjb24gSGFtYnVyZ2VyJywgJ0hhbWJ1cmdlciB3aXRoIGJhY29uJywgMTQuOTAsIGJhY29uQnJnSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2VzL0BmaWZlcm5hbmRvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkZpZGVsIEZlcm5hbmRvPC9hPicpO1xuICAgIGNvbnN0IGJ1cmdlcjMgPSBuZXcgRm9vZCgnYnVyZ2VyJywgJ0NoaWNrZW4gSGFtYnVyZ2VyJywgJ0hhbWJ1cmdlciB3aXRoIGNoaWNrZW4nLCAxNC45MCwgY2hpY2tlbkJyZ0ltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZGlsamE5Nj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5EaWRpIE1pYW08L2E+Jyk7XG4gICAgY29uc3Qgc2FsYWQxID0gbmV3IEZvb2QoJ3NhbGFkJywgJ0hhbGxvdW0nLCAnU2FsYWQgd2l0aCBoYWxsb3VtJywgMTYuOTAsIGhhbGxvdW1JbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGRvdmlsZXJtP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkRvdmlsZSBSYW1vc2thaXRlPC9hPicpO1xuICAgIGNvbnN0IHNhbGFkMiA9IG5ldyBGb29kKCdzYWxhZCcsICdDaGV2cmUnLCAnU2FsYWQgd2l0aCBDaGV2cmUnLCAxNi45MCwgY2hldnJlSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BlYXRvdXRjb2xvZ25lP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkVBVCBPVVQgQ09MT0dORTwvYT4nKTtcbiAgICBjb25zdCBzYWxhZDMgPSBuZXcgRm9vZCgnc2FsYWQnLCAnQ2hpY2tlbicsICdTYWxhZCB3aXRoIENoaWNrZW4nLCAxNi45MCwgY2hpY2tlblNhbGFkSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2VzL0BmYWxsb25taWNoYWVsdHg/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+RmFsbG9uIE1pY2hhZWw8L2E+Jyk7XG4gICAgY29uc3QgZ3JpbGwxID0gbmV3IEZvb2QoJ2dyaWxsJywgJ1NhbG1vbicsICdTYWxtb24gd2l0aCB2ZWdldGFibGVzIGFuZCBwb3RhdG9lcyBpbiBzYXVjZScsIDI1LjUwLCBzYWxtb25JbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vamEvQG1pY2hlaWxlP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPm1pY2hlaWxlIGRvdCBjb208L2E+Jyk7XG4gICAgY29uc3QgZ3JpbGwyID0gbmV3IEZvb2QoJ2dyaWxsJywgJ1N0ZWFrJywgJ1N0ZWFrIHdpdGggdmVnZXRhYmxlcyBhbmQgcG90YXRvZXMgaW4gc2F1Y2UnLCAyNi45MCwgc3RlYWtJbWcsICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGNvdmVydG5pbmU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VGltIFRvb21leTwvYT4nKTtcbiAgICBjb25zdCBncmlsbDMgPSBuZXcgRm9vZCgnZ3JpbGwnLCAnQ2hpY2tlbicsICdDaGlja2VuIHdpdGggdmVnZXRhYmxlcyBhbmQgcG90YXRvZXMgaW4gc2F1Y2UnLCAyMS41MCwgY2hpY2tlbkdyaWxsSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0B0ZW1wZXN0ZGVzaWduZXI/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TWFyayBEZVlvdW5nPC9hPicpO1xuICAgIGNvbnN0IGRlc3NlcnQxID0gbmV3IEZvb2QoJ2Rlc3NlcnQnLCAnSWNlIGNyZWFtJywgJ1ZhbmlsbGEgSWNlIENyZWFtIHdpdGggc3VwcmlzZSBzYXVjZScsIDcuOTAsIGljZUNyZWFtSW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BjaGFybGVzZGVsdXZpbz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5jaGFybGVzZGVsdXZpbzwvYT4nKTtcbiAgICBjb25zdCBkZXNzZXJ0MiA9IG5ldyBGb29kKCdkZXNzZXJ0JywgJ1NvcmJldCcsICdNZWxvbiBzb3JiZXQgd2l0aCBsb3ZlJywgMy45MCwgc29yYmV0SW1nLCAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0Bob25leXBvcHBldD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5TYW5kaWUgQ2xhcmtlPC9hPicpO1xuICAgIGNvbnN0IGRlc3NlcnQzID0gbmV3IEZvb2QoJ2Rlc3NlcnQnLCAnQ2hvY29sYXRlIEZvbmRhbnQnLCAnQ29tZm9ydCB0cmVhdCB3aXRoIHZhbmlsbGEgaWNlIGNyZWFtJywgOC41MCwgZm9uZGFudEltZywgJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZ3Jpc3NraXRjaGVuP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPk1heCBHcmlzczwvYT4nKTtcblxuICAgIGZvb2RJdGVtcy5wdXNoKHN0YXJ0ZXIxKTtcbiAgICBmb29kSXRlbXMucHVzaChzdGFydGVyMik7XG4gICAgZm9vZEl0ZW1zLnB1c2goc3RhcnRlcjMpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGJ1cmdlcjEpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGJ1cmdlcjIpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGJ1cmdlcjMpO1xuICAgIGZvb2RJdGVtcy5wdXNoKHNhbGFkMSk7XG4gICAgZm9vZEl0ZW1zLnB1c2goc2FsYWQyKTtcbiAgICBmb29kSXRlbXMucHVzaChzYWxhZDMpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGdyaWxsMSk7XG4gICAgZm9vZEl0ZW1zLnB1c2goZ3JpbGwyKTtcbiAgICBmb29kSXRlbXMucHVzaChncmlsbDMpO1xuICAgIGZvb2RJdGVtcy5wdXNoKGRlc3NlcnQxKTtcbiAgICBmb29kSXRlbXMucHVzaChkZXNzZXJ0Mik7XG4gICAgZm9vZEl0ZW1zLnB1c2goZGVzc2VydDMpO1xuXG4gICAgY29uc29sZS5sb2coZm9vZEl0ZW1zWzBdLmNhdGVnb3J5KVxuXG4gICAgY29uc3Qgc3RhcnRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFydGVyV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0ZXJzJyk7XG4gICAgY29uc3QgYnVyZ2VyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1cmdlcldyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdidXJnZXJzJyk7XG4gICAgY29uc3Qgc2FsYWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2FsYWRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FsYWRzJyk7XG4gICAgY29uc3QgZ3JpbGxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpbGxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpbGxzJyk7XG4gICAgY29uc3QgZGVzc2VydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNzZXJ0V3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc3NlcnRzJyk7XG5cbiAgICBsZXQgc3RhcnRlcnMgPSAnJztcbiAgICBsZXQgYnVyZ2VycyA9ICcnO1xuICAgIGxldCBzYWxhZHMgPSAnJztcbiAgICBsZXQgZ3JpbGxzID0gJyc7XG4gICAgbGV0IGRlc3NlcnRzID0gJyc7XG5cbiAgICBmb29kSXRlbXMuZm9yRWFjaChmb29kID0+IHtcbiAgICAgICAgc3dpdGNoKGZvb2QuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0ZXInOlxuICAgICAgICAgICAgICAgIHN0YXJ0ZXJzICs9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtmb29kLmNhdGVnb3J5fVwiIGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm9vZC5pbWd9XCIgYWx0PVwiJHtmb29kLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmb29kLmltZ0NyZWRpdHN9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb29kLXRpdGxlXCI+JHtmb29kLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtZGVzY1wiPiR7Zm9vZC5kZXNjfTxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1wcmljZVwiPiR7Zm9vZC5wcmljZX3igqw8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2J1cmdlcic6XG4gICAgICAgICAgICAgICAgYnVyZ2VycyArPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7Zm9vZC5jYXRlZ29yeX1cIiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2Zvb2QuaW1nfVwiIGFsdD1cIiR7Zm9vZC5uYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm9vZC5pbWdDcmVkaXRzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9vZC10aXRsZVwiPiR7Zm9vZC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLWRlc2NcIj4ke2Zvb2QuZGVzY308cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtcHJpY2VcIj4ke2Zvb2QucHJpY2V94oKsPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzYWxhZCc6XG4gICAgICAgICAgICAgICAgc2FsYWRzICs9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtmb29kLmNhdGVnb3J5fVwiIGNsYXNzPVwibWVudS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm9vZC5pbWd9XCIgYWx0PVwiJHtmb29kLm5hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtmb29kLmltZ0NyZWRpdHN9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb29kLXRpdGxlXCI+JHtmb29kLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtZGVzY1wiPiR7Zm9vZC5kZXNjfTxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1wcmljZVwiPiR7Zm9vZC5wcmljZX3igqw8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dyaWxsJzpcbiAgICAgICAgICAgICAgICBncmlsbHMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVzc2VydCc6XG4gICAgICAgICAgICAgICAgZGVzc2VydHMgKz1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke2Zvb2QuY2F0ZWdvcnl9XCIgY2xhc3M9XCJtZW51LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb29kLmltZ31cIiBhbHQ9XCIke2Zvb2QubmFtZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2Zvb2QuaW1nQ3JlZGl0c308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvb2QtdGl0bGVcIj4ke2Zvb2QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1kZXNjXCI+JHtmb29kLmRlc2N9PHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kLXByaWNlXCI+JHtmb29kLnByaWNlfeKCrDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFydGVyV3JhcHBlci5pbm5lckhUTUwgPSBzdGFydGVycztcbiAgICBidXJnZXJXcmFwcGVyLmlubmVySFRNTCA9IGJ1cmdlcnM7XG4gICAgc2FsYWRXcmFwcGVyLmlubmVySFRNTCA9IHNhbGFkcztcbiAgICBncmlsbFdyYXBwZXIuaW5uZXJIVE1MID0gZ3JpbGxzO1xuICAgIGRlc3NlcnRXcmFwcGVyLmlubmVySFRNTCA9IGRlc3NlcnRzO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBzdGFydGVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdGFydGVyc1RpdGxlLnRleHRDb250ZW50ID0gJ1N0YXJ0ZXJzJztcbiAgICBjb25zdCBidXJnZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGJ1cmdlcnNUaXRsZS50ZXh0Q29udGVudCA9ICdCdXJnZXJzJztcbiAgICBjb25zdCBzYWxhZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2FsYWRzVGl0bGUudGV4dENvbnRlbnQgPSAnU2FsYWRzJztcbiAgICBjb25zdCBncmlsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBncmlsbFRpdGxlLnRleHRDb250ZW50ID0gJ0Zyb20gdGhlIEdyaWxsJztcbiAgICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc3NlcnRUaXRsZS50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG5cbiAgICBjb25zdCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtd3JhcHBlcicpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJzVGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJXcmFwcGVyKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChidXJnZXJzVGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGJ1cmdlcldyYXBwZXIpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKHNhbGFkc1RpdGxlKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChzYWxhZFdyYXBwZXIpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGdyaWxsVGl0bGUpO1xuICAgIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGdyaWxsV3JhcHBlcik7XG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzc2VydFRpdGxlKTtcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChkZXNzZXJ0V3JhcHBlcik7XG5cbiAgICBjb25zdCBkYWlseURlYWwgPSBnZXREYWlseURlYWwoZm9vZEl0ZW1zKTtcbiAgICBjb25zdCBkYWlseURlYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGFpbHlEZWFsQ2FyZC5jbGFzc0xpc3QuYWRkKCdkYWlseS1kZWFsJyk7XG5cbiAgICBjb25zdCBkYWlseURlYWxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkYWlseURlYWxJbWcuc3JjID0gZGFpbHlEZWFsLmltZztcbiAgICBjb25zdCBkYWlseURlYWxJbWdDcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcbiAgICBkYWlseURlYWxJbWdDcmVkaXRzLmlubmVySFRNTCA9IGRhaWx5RGVhbC5pbWdDcmVkaXRzO1xuICAgIGNvbnN0IGRhaWx5RGVhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkYWlseURlYWxUaXRsZS50ZXh0Q29udGVudCA9IGRhaWx5RGVhbC5uYW1lO1xuICAgIGNvbnN0IGRhaWx5RGVhbEFsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZGFpbHlEZWFsQWxlLnRleHRDb250ZW50ID0gJ0RhaWx5IERlYWwgLTIwJSBvZmYhJztcbiAgICBjb25zdCBkYWlseURlYWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhaWx5RGVhbERlc2MudGV4dENvbnRlbnQgPSBkYWlseURlYWwuZGVzYztcbiAgICBjb25zdCBkYWlseURlYWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYWlseURlYWxQcmljZS50ZXh0Q29udGVudCA9IGRhaWx5RGVhbC5wcmljZSAqIDAuODAgKyBcIuKCrFwiO1xuXG4gICAgY29uc3QgZGFpbHlkZWFsQ2FyZGVUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhaWx5ZGVhbENhcmRlVGV4dHMuY2xhc3NMaXN0LmFkZCgnZGFpbHktZGVhbC10ZXh0Jyk7XG5cbiAgICBkYWlseWRlYWxDYXJkZVRleHRzLmFwcGVuZENoaWxkKGRhaWx5RGVhbEltZ0NyZWRpdHMpO1xuICAgIGRhaWx5ZGVhbENhcmRlVGV4dHMuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsVGl0bGUpO1xuICAgIGRhaWx5ZGVhbENhcmRlVGV4dHMuYXBwZW5kQ2hpbGQoZGFpbHlEZWFsRGVzYyk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxQcmljZSk7XG4gICAgZGFpbHlkZWFsQ2FyZGVUZXh0cy5hcHBlbmRDaGlsZChkYWlseURlYWxBbGUpO1xuXG4gICAgZGFpbHlEZWFsQ2FyZC5hcHBlbmRDaGlsZChkYWlseURlYWxJbWcpO1xuICAgIGRhaWx5RGVhbENhcmQuYXBwZW5kQ2hpbGQoZGFpbHlkZWFsQ2FyZGVUZXh0cyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGgyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRhaWx5RGVhbENhcmQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59O1xuXG5mdW5jdGlvbiBnZXREYWlseURlYWwoZm9vZEl0ZW1zKSB7XG4gICAgc3dpdGNoKGdldERheSgpKSB7XG4gICAgICAgIGNhc2UgJ1N1bmRheSc6XG4gICAgICAgICAgICByZXR1cm4gZm9vZEl0ZW1zWzNdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTW9uZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbNF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUdWVzZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbNV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdXZWRuZXNkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s2XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RodXJzZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbN107XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdGcmlkYXknOlxuICAgICAgICAgICAgcmV0dXJuIGZvb2RJdGVtc1s4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NhdHVyZGF5JzpcbiAgICAgICAgICAgIHJldHVybiBmb29kSXRlbXNbOV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=