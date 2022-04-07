import { setFormElementsDisabledMode } from './form.js';

const filtersForm = document.querySelector('.map__filters');
const filtersFormElements = filtersForm.querySelectorAll('.map__filter');

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');


filtersForm.classList.add('map__filters--disabled');
setFormElementsDisabledMode(filtersFormElements, true);

adForm.classList.add('ad-form--disabled');
setFormElementsDisabledMode(adFormElements, true);


const enableForms = () => {
  filtersForm.classList.remove('map__filters--disabled');
  setFormElementsDisabledMode(filtersFormElements, false);

  adForm.classList.remove('ad-form--disabled');
  setFormElementsDisabledMode(adFormElements, false);
};


const disableForms = () => {
  filtersForm.classList.add('map__filters--disabled');
  setFormElementsDisabledMode(filtersFormElements, true);
  filtersForm.reset();

  adForm.classList.add('ad-form--disabled');
  setFormElementsDisabledMode(adFormElements, true);
  adForm.reset();
};

export { enableForms, disableForms };
