import {
  setDisabled,
  unsetDisabled
} from './utils/dom.js';


const filtersForm = document.querySelector('.map__filters');
const filtersFormElements = filtersForm.querySelectorAll('.map__filter');


const enable = () => {
  filtersForm.classList.remove('map__filters--disabled');
  unsetDisabled(filtersFormElements);
};

const disable = () => {
  filtersForm.classList.add('map__filters--disabled');
  setDisabled(filtersFormElements);
};

const reset = () => {
  filtersForm.reset();
};

export {
  enable,
  disable,
  reset
};
