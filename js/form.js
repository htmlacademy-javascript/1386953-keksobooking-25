import { resetMapToDefault } from './map.js';

const TEXT_LENGTH = {
  min: 30,
  max: 100
};
const PRICE_VALUE = {
  min: 0,
  max: 100000
};

const ROOM_TO_CAPACITY = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const CAPACITY_MESSAGES = {
  1: 'для 1 гостя',
  2: 'для 1 или 2 гостей',
  3: 'от 1 до 3 гостей',
  100: 'не для гостей'
};

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__error'
});

const formInputTitle = adForm.querySelector('#title');
const validateInputTitle = (value) => value.length >= TEXT_LENGTH.min && value.length <= TEXT_LENGTH.max;
pristine.addValidator(formInputTitle, validateInputTitle, 'от 30 до 100 символов');

const formInputPrice = adForm.querySelector('#price');
const validateInputPrice = (value) => value >= PRICE_VALUE.min && value <= PRICE_VALUE.max;
pristine.addValidator(formInputPrice, validateInputPrice, 'от 0 до 100000');

const roomNumber = adForm.querySelector('#room_number');
const roomCapacity = adForm.querySelector('#capacity');

const validateRoomAndCapacity = (rooms, capacity) => {
  const validRooms = ROOM_TO_CAPACITY[rooms];
  const validCapacity = validRooms.includes(capacity);

  return validCapacity;
};
const validateCapacity = () => {
  const rooms = roomNumber.value;
  const capacity = roomCapacity.value;

  return validateRoomAndCapacity(rooms, capacity);
};

const getCapacityErrorMessage = () => CAPACITY_MESSAGES[roomNumber.value];

pristine.addValidator(roomCapacity, validateCapacity, getCapacityErrorMessage);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', resetMapToDefault);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
