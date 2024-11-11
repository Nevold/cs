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
const linkFooter = document.querySelector('#link-footer');
const mainHeader = document.querySelector('.main-header');

function hiddenBurger() {
  if (burger.classList.contains('burger-rotate-up')) {
    burger.classList.remove('burger-rotate-up');
    burger.classList.add('burger-rotate-down');
    menu.classList.remove('menu-translate-up');
    setTimeout(() => menu.classList.add('block-hidden'), 300);
    setTimeout(() => popup.classList.add('block-hidden'), 0);
    // headerLogo.classList.remove('block-hidden-opacity'); // remove if possible

    mainHeader.style.position = 'fixed';
  } else {
    burger.classList.add('burger-rotate-up');
    burger.classList.remove('burger-rotate-down');
    setTimeout(() => menu.classList.add('menu-translate-up'), 0);
    menu.classList.remove('block-hidden');
    setTimeout(() => popup.classList.remove('block-hidden'), 0);
    // headerLogo.classList.add('block-hidden-opacity'); // remove if possible
    mainHeader.style.position = 'static';
  }
  document.body.classList.toggle('no-scroll');
}

burger.addEventListener('click', hiddenBurger);
popup.addEventListener('click', hiddenBurger);
// burgerLogo.addEventListener('click', hiddenBurger); // remove if possible
currentPage.addEventListener('click', hiddenBurger); // remove if possible
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
    mainHeader.style.position = 'static';
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
  mainHeader.style.position = 'fixed';
  document.body.classList.remove('no-scroll-popup');
  popupPets.classList.add('block-hidden');
});

petsPopupContainer.addEventListener('mouseleave', () => {
  buttomClose.style.backgroundColor = '#fddcc4';
});

petsPopupContainer.addEventListener('mouseenter', () => {
  buttomClose.style.backgroundColor = 'transparent';
});

//  PAGINATON
const START_NUMBER_PAGE = 1;
let LIMIT_NUMBER_PAGE = 6;
const DEFAULT_NUMBER_PAGE = 16;
const leftLeftButton = document.querySelector('#left-left-arrow');
const leftButton = document.querySelector('#left-arrow');
const centerButton = document.querySelector('#center-arrow');
const rightButton = document.querySelector('#right-arrow');
const rightRightButton = document.querySelector('#right-right-arrow');
const buttonsField = document.querySelector('.friends-buttom-wrapper');
const friendsImages = document.getElementsByClassName('friends-slider-image');
const petsNames = document.querySelectorAll('.pets-name');
let counterPage = 1;
let tempPetObjectDb = db;
const tempGeneratedArray = [];
let resultArrayShuffleForCard = [];
let currentPetObject = [];
const screenWidth = document.body.clientWidth;
let extenalScopeCounterPageForButtonClick = 1;
let extenalScopeCounterPageForLeftClick;

function generateResultArray(count) {
  for (let i = 0; i < count; i++) {
    tempGeneratedArray.push([...tempPetObjectDb]);
    tempPetObjectDb = setShuffleCard(db);
  }
  return tempGeneratedArray;
}

function changeCard() {
  [...friendsImages].forEach((elem) => {
    const petImage = elem;
    petImage.classList.add('pet-hidden-opacity');
  });

  [...petsNames].forEach((elem) => {
    const petName = elem;
    petName.classList.add('pet-hidden-opacity');
  });

  setTimeout(() => {
    [...friendsImages].forEach((elem, index) => {
      const petImage = elem;
      petImage.src = currentPetObject[index].img;
    });
  }, 200);

  setTimeout(() => {
    [...friendsImages].forEach((elem) => {
      const petImage = elem;
      petImage.classList.remove('pet-hidden-opacity');
    });
  }, 300);

  setTimeout(() => {
    [...petsNames].forEach((elem, index) => {
      const petName = elem;
      petName.innerText = currentPetObject[index].name;
      petName.classList.remove('pet-hidden-opacity');
    });
  }, 200);

  [...pets].forEach((elem, index) => {
    const petId = elem;
    petId.id = currentPetObject[index].name;
  });
}
// Change array for resize window
const DEFAULT_SHUFFLE_ARRAY = generateResultArray(DEFAULT_NUMBER_PAGE);

resultArrayShuffleForCard = [...DEFAULT_SHUFFLE_ARRAY];

window.addEventListener('resize', () => {
  const screenWidthResize = document.body.clientWidth;
  if (screenWidthResize < 1280 && screenWidthResize >= 768) {
    LIMIT_NUMBER_PAGE = 8;
    if (extenalScopeCounterPageForButtonClick > LIMIT_NUMBER_PAGE) {
      rightButton.disabled = true;
      rightRightButton.disabled = true;
      rightButton.classList.add('arrow-border-disable');
      rightRightButton.classList.add('arrow-border-disable');
      centerButton.innerText = LIMIT_NUMBER_PAGE;
      extenalScopeCounterPageForLeftClick = LIMIT_NUMBER_PAGE;
    }
    if (extenalScopeCounterPageForButtonClick < LIMIT_NUMBER_PAGE) {
      rightButton.disabled = false;
      rightRightButton.disabled = false;
      rightButton.classList.remove('arrow-border-disable');
      rightRightButton.classList.remove('arrow-border-disable');
    }
  } else if (screenWidthResize < 768) {
    LIMIT_NUMBER_PAGE = 16;
    if (extenalScopeCounterPageForButtonClick < LIMIT_NUMBER_PAGE) {
      rightButton.disabled = false;
      rightRightButton.disabled = false;
      rightButton.classList.remove('arrow-border-disable');
      rightRightButton.classList.remove('arrow-border-disable');
    }
  } else {
    LIMIT_NUMBER_PAGE = 6;
    if (extenalScopeCounterPageForButtonClick > LIMIT_NUMBER_PAGE) {
      rightButton.disabled = true;
      rightRightButton.disabled = true;
      rightButton.classList.add('arrow-border-disable');
      rightRightButton.classList.add('arrow-border-disable');
      centerButton.innerText = LIMIT_NUMBER_PAGE;
      extenalScopeCounterPageForLeftClick = LIMIT_NUMBER_PAGE;
    }
  }
});

if (screenWidth < 1280 && screenWidth >= 768) {
  LIMIT_NUMBER_PAGE = 8;
}
if (screenWidth < 768) {
  LIMIT_NUMBER_PAGE = 16;
}

buttonsField.addEventListener('click', (e) => {
  if (e.target.id === 'right-right-arrow') {
    counterPage = LIMIT_NUMBER_PAGE;
    currentPetObject = resultArrayShuffleForCard[counterPage - 1];
    centerButton.innerText = counterPage;
    changeCard();
    leftButton.disabled = false;
    leftLeftButton.disabled = false;
    leftButton.classList.remove('arrow-border-disable');
    leftLeftButton.classList.remove('arrow-border-disable');
  }
  if (e.target.id === 'left-left-arrow') {
    counterPage = 1;
    currentPetObject = resultArrayShuffleForCard[counterPage - 1];
    centerButton.innerText = counterPage;
    changeCard();
  }

  if (e.target.id === 'right-arrow' && counterPage < LIMIT_NUMBER_PAGE) {
    currentPetObject = resultArrayShuffleForCard[counterPage];

    leftButton.disabled = false;
    leftLeftButton.disabled = false;
    leftButton.classList.remove('arrow-border-disable');
    leftLeftButton.classList.remove('arrow-border-disable');
    counterPage++;
    centerButton.innerText = counterPage;
    changeCard();
  }
  if (e.target.id === 'left-arrow' && counterPage > START_NUMBER_PAGE) {
    if (extenalScopeCounterPageForLeftClick && extenalScopeCounterPageForLeftClick < counterPage) {
      counterPage = extenalScopeCounterPageForLeftClick;
    }
    currentPetObject = resultArrayShuffleForCard[counterPage - 2];
    counterPage--;
    centerButton.innerText = counterPage;
    changeCard();
  }

  if (counterPage === START_NUMBER_PAGE) {
    leftButton.disabled = true;
    leftLeftButton.disabled = true;
    leftButton.classList.add('arrow-border-disable');
    leftLeftButton.classList.add('arrow-border-disable');
  }
  if (counterPage === LIMIT_NUMBER_PAGE) {
    rightButton.disabled = true;
    rightRightButton.disabled = true;
    rightButton.classList.add('arrow-border-disable');
    rightRightButton.classList.add('arrow-border-disable');
  } else {
    rightButton.disabled = false;
    rightRightButton.disabled = false;
    rightButton.classList.remove('arrow-border-disable');
    rightRightButton.classList.remove('arrow-border-disable');
  }
  extenalScopeCounterPageForButtonClick = counterPage;
});
