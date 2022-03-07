const AD_COUNT = 10;

const MIN_INTEGER_VALUE = 1;
const MAX_INTEGER_VALUE = 100;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;
const DECIMAL_PLACES = 5;

const AVATAR_IMAGES = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_IN_VALUES = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECK_OUT_VALUES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const TITLE = [
  'Для самых непритязятельных.',
  'СРОЧНО!!!',
  'ТОЛЬКО НА ДЛИТЕЛЬНЫЙ СРОК!!!',
  'Сдается.',
  'Не проходите мимо!'
];

const DESCRIPTION = [
  'Большая и уютная, заменит дом родной.',
  'Все удобства для людей и не только.',
];

const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  return Number(Math.random() * (max - min + 1) + min).toFixed(digits);
};

const latitude = getRandomPositiveFloat(MIN_LATITUDE, MAX_LATITUDE, DECIMAL_PLACES);
const longitude = getRandomPositiveFloat(MIN_LONGITUDE, MAX_LONGITUDE, DECIMAL_PLACES);