// HIDDEN SCROLL
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

const wheelOpt = { passive: false };
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// BURGER MENU
const burger = document.querySelector('.burger');
const menu = document.querySelector('#navigation');
const popup = document.querySelector('.popup');
// const burgerLogo = document.querySelector('#burger-logo'); // remove if possible
// const headerLogo = document.querySelector('#header-logo'); // remove if possible
const currentPage = document.querySelector('#current-page');
const linkHelp = document.querySelector('#link-help');
const linkFooter = document.querySelector('#link-footer');

function hiddenBurger() {
  if (burger.classList.contains('burger-rotate-up')) {
    burger.classList.remove('burger-rotate-up');
    burger.classList.add('burger-rotate-down');
    menu.classList.remove('menu-translate-up');
    setTimeout(() => menu.classList.add('block-hidden'), 300);
    setTimeout(() => popup.classList.add('block-hidden'), 0);
    // headerLogo.classList.remove('block-hidden-opacity'); // remove if possible
  } else {
    burger.classList.add('burger-rotate-up');
    burger.classList.remove('burger-rotate-down');
    setTimeout(() => menu.classList.add('menu-translate-up'), 0);
    menu.classList.remove('block-hidden');
    setTimeout(() => popup.classList.remove('block-hidden'), 0);
    // headerLogo.classList.add('block-hidden-opacity'); // remove if possible
  }
  document.body.classList.toggle('no-scroll');
}

burger.addEventListener('click', hiddenBurger);
popup.addEventListener('click', hiddenBurger);
// burgerLogo.addEventListener('click', hiddenBurger); // remove if possible
currentPage.addEventListener('click', hiddenBurger); // remove if possible
linkHelp.addEventListener('click', hiddenBurger);
linkFooter.addEventListener('click', hiddenBurger);

// POPUP
let db = [
  {
    name: 'Katrine',
    img: '../../assets/images/katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Jennifer',
    img: '../../assets/images/jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../assets/images/timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: '../../assets/images/charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../assets/images/freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
];

function setShuffleCard(array) {
  const newArray = array;
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// random images on page reload
db = setShuffleCard(db);
[...document.getElementsByClassName('friends-wrapper-image')].forEach((elem, index) => {
  const pet = elem;
  pet.firstElementChild.src = db[index].img;
  pet.firstElementChild.nextElementSibling.innerText = db[index].name;
  pet.id = db[index].name;
});

const pets = document.getElementsByClassName('friends-wrapper-image');
const popupPets = document.querySelector('#popup-pets');
const namePet = document.querySelector('#name');
const typePet = document.querySelector('#type');
const breedPet = document.querySelector('#breed');
const descriptionPet = document.querySelector('#description');
const agePet = document.querySelector('#age');
const inoculationsPet = document.querySelector('#inoculations');
const imagePet = document.querySelector('#pet-image');
const infoPet = document.querySelector('#pet-info');
const diseasesPet = document.querySelector('#diseases');
const parasitesPet = document.querySelector('#parasites');
const buttomClose = document.querySelector('.buttom-close');
const petsPopupContainer = document.querySelector('.pets-popup-container');

[...pets].forEach((item) => {
  item.addEventListener('click', () => {
    disableScroll();
    popupPets.classList.remove('block-hidden');
    document.body.classList.add('no-scroll-popup');
    const currentPetObject = db.filter((elem) => item.getAttribute('id').toUpperCase() === elem.name.toUpperCase())[0];
    namePet.innerText = currentPetObject.name;
    typePet.innerText = currentPetObject.type;
    breedPet.innerText = currentPetObject.breed;
    descriptionPet.innerText = currentPetObject.description;
    agePet.innerText = currentPetObject.age;
    inoculationsPet.innerText = currentPetObject.inoculations;
    imagePet.style.backgroundImage = `url(${currentPetObject.img})`;
    diseasesPet.innerText = currentPetObject.diseases.length === 1 ? currentPetObject.diseases[0] : currentPetObject.diseases.join(', ');
    parasitesPet.innerText = currentPetObject.parasites.length === 1 ? currentPetObject.parasites[0] : currentPetObject.parasites.join(', ');
  });
});

popupPets.addEventListener('click', (e) => {
  if (e.target.closest('#pet-image') === imagePet || e.target.closest('#pet-info') === infoPet) {
    return;
  }
  enableScroll();
  document.body.classList.remove('no-scroll-popup');
  popupPets.classList.add('block-hidden');
});

petsPopupContainer.addEventListener('mouseleave', () => {
  buttomClose.style.backgroundColor = '#fddcc4';
});

petsPopupContainer.addEventListener('mouseenter', () => {
  buttomClose.style.backgroundColor = 'transparent';
});

// Carusel

const petsArrowLeft = document.getElementById('left-arrow');
const petsArrowRight = document.getElementById('right-arrow');
const petsItems = document.querySelectorAll('.friends-wrapper-image-all');
let firstSlideDb = db.slice(0, 4);
let secondSlideDb = db.slice(4);
let currentItem = 0;
let isEnable = true;
const friendsImagesFirstSlide = [...document.getElementsByClassName('friends-slider-image')].slice(0, 3);
const friendsImagesSecondSlide = [...document.getElementsByClassName('friends-slider-image')].slice(3);
const petsNamesFirstSlide = [...document.querySelectorAll('.pets-name')].slice(0, 3);
const petsNamesSecondSlide = [...document.querySelectorAll('.pets-name')].slice(3);
const petsIdFirstSlide = [...document.querySelectorAll('.friends-wrapper-image')].slice(0, 3);
const petsidSecondSlide = [...document.querySelectorAll('.friends-wrapper-image')].slice(3);

// COMMENTED CODE - to implement repeat for one step forward / backward

// let directionSlide;
// const progressMapCards = [db];
// const directionSlideStep = [];
// const ONE_CLICK_LEFT_SLIDE = 2;
// const TWO_CLICK_RIGHT_SLIDE = 0;
// const PREV_NEXT_STEP_LIMIT = 2;

function changeCard() {
  // directionSlideStep.push(directionSlide);
  // if (directionSlideStep.length > PREV_NEXT_STEP_LIMIT) {
  //   directionSlideStep.shift();
  // }

  // if (progressMapCards.length >= PREV_NEXT_STEP_LIMIT) {
  //   progressMapCards.shift();
  // }

  if (currentItem === 1) {
    secondSlideDb = setShuffleCard(secondSlideDb);
    // progressMapCards.push([...secondSlideDb]);
    friendsImagesSecondSlide.forEach((elem, index) => {
      const petImage = elem;
      petImage.src = secondSlideDb[index].img;
    });
    petsNamesSecondSlide.forEach((elem, index) => {
      const petName = elem;
      petName.innerText = secondSlideDb[index].name;
    });
    petsidSecondSlide.forEach((elem, index) => {
      const petId = elem;
      petId.id = secondSlideDb[index].name;
    });
  } else {
    // if ((directionSlide === ONE_CLICK_LEFT_SLIDE && directionSlideStep[0] === -1) || (directionSlide === TWO_CLICK_RIGHT_SLIDE && directionSlideStep[0] === 1)) {
    //   [secondSlideDb] = progressMapCards;
    //   console.log('rev');
    // } else {
    firstSlideDb = setShuffleCard(firstSlideDb);
    //   progressMapCards.push([...firstSlideDb]);
    // }
    friendsImagesFirstSlide.forEach((elem, index) => {
      const petImage = elem;
      petImage.src = firstSlideDb[index].img;
    });
    petsNamesFirstSlide.forEach((elem, index) => {
      const petName = elem;
      petName.innerText = firstSlideDb[index].name;
    });
    petsIdFirstSlide.forEach((elem, index) => {
      const petId = elem;
      petId.id = firstSlideDb[index].name;
    });
  }
}

function changeCurrentItem(n) {
  currentItem = (n + petsItems.length) % petsItems.length;
  // directionSlide = n;
}

function hideItem(direction) {
  isEnable = false;
  petsItems[currentItem].classList.add(direction);
  petsItems[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active-pets', direction);
  });
}

function showItem(direction) {
  petsItems[currentItem].classList.add('next-pets', direction);
  petsItems[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next-pets', direction);
    this.classList.add('active-pets');
    isEnable = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

petsArrowRight.addEventListener('click', function () {
  if (isEnable) {
    previousItem(currentItem);
    changeCard();
  }
});

petsArrowLeft.addEventListener('click', function () {
  if (isEnable) {
    nextItem(currentItem);
    changeCard();
  }
});
