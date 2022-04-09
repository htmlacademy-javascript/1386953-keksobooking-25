import {
  setDisabled,
  unsetDisabled,
} from './utils/dom.js';


const textLength = {
  MIN: 30,
  MAX: 100
};
const priceValue = {
  MIN: 0,
  MAX: 100000
};

const roomToCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const capacityMessages = {
  1: 'для 1 гостя',
  2: 'для 1 или 2 гостей',
  3: 'от 1 до 3 гостей',
  100: 'не для гостей'
};

const HOUSING_COST = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const FRACTION_TRUNCATE_ADDRESS = 5;

const adForm = document.querySelector('.ad-form');
const formInputTitle = adForm.querySelector('#title');
const roomNumber = adForm.querySelector('#room_number');
const roomCapacity = adForm.querySelector('#capacity');
const formInputPrice = adForm.querySelector('#price');
const housingType = adForm.querySelector('#type');
const resetButton = adForm.querySelector('.ad-form__reset');
const addressField = adForm.querySelector('#address');
const adFormFiedsets = adForm.querySelectorAll('.ad-form__element');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__error'
});


const validateInputTitle = (value) => value.length >= textLength.MIN && value.length <= textLength.MAX;

const validateInputPrice = (value) => value >= priceValue.MIN && value <= priceValue.MAX;

const validateRoomAndCapacity = (rooms, capacity) => {
  const validRooms = roomToCapacity[rooms];
  const validCapacity = validRooms.includes(capacity);

  return validCapacity;
};

const validateCapacity = () => {
  const rooms = roomNumber.value;
  const capacity = roomCapacity.value;

  return validateRoomAndCapacity(rooms, capacity);
};

const validateHousingAndPrice = (type, price) => {
  const minCost = HOUSING_COST[type];
  const validPrice = (minCost <= price);

  return validPrice;
};

const validateCost = () => {
  const type = housingType.value;
  const price = formInputPrice.value;

  return validateHousingAndPrice(type, price);
};

const getCapacityErrorMessage = () => capacityMessages[roomNumber.value];


pristine.addValidator(formInputTitle, validateInputTitle, 'от 30 до 100 символов');
pristine.addValidator(formInputPrice, validateInputPrice, 'от 0 до 100000');
pristine.addValidator(roomCapacity, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(formInputPrice, validateCost, 'error');


const enable = () => {
  adForm.classList.remove('ad-form--disabled');
  unsetDisabled(adFormFiedsets);
};

const disable = () => {
  adForm.classList.add('ad-form--disabled');
  setDisabled(adFormFiedsets);
};

const reset = () => {
  adForm.reset();
};

const renderAddressInput = ({ lat, lng }) => {
  addressField.value = (
    `${lat.toFixed(FRACTION_TRUNCATE_ADDRESS)}, ${lng.toFixed(FRACTION_TRUNCATE_ADDRESS)}`
  );
};


let resetCallback = null;
let submitCallback = null;

const setResetHandler = (callback) => {
  resetCallback = callback;
};

const setSubmitHandler = (callback) => {
  submitCallback = callback;
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetCallback();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(adForm);
    submitCallback(formData);
  }
});


export {
  enable,
  disable,
  reset,
  renderAddressInput,
  setResetHandler,
  setSubmitHandler,
};
