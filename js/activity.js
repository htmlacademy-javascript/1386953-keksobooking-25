import { isEscapeKey, isEnterKey, formElementsDisabledMode } from './utils.js';

const filtersForm = document.querySelector('.map__filters');
const filtersFormElements = filtersForm.querySelectorAll('.map__filter');

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');

filtersForm.classList.add('map__filters--disabled');
formElementsDisabledMode(filtersFormElements, true);

adForm.classList.add('ad-form--disabled');
formElementsDisabledMode(adFormElements, true);


const enableForms = () => {
  filtersForm.classList.remove('map__filters--disabled');
  formElementsDisabledMode(filtersFormElements, false);

  adForm.classList.remove('ad-form--disabled');
  formElementsDisabledMode(adFormElements, false);
};

const disableForms = () => {
  filtersForm.classList.add('map__filters--disabled');
  formElementsDisabledMode(filtersFormElements, true);
  filtersForm.reset();

  adForm.classList.add('ad-form--disabled');
  formElementsDisabledMode(adFormElements, true);
  adForm.reset();
};

document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    enableForms();
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    disableForms();
  }
});
