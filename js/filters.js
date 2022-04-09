import {
  setDisebled,
  unsetDisebled
} from './utils/dom.js';


const filtersForm = document.querySelector('.map__filters');
const filtersFormElements = filtersForm.querySelectorAll('.map__filter');


const enable = () => {
  filtersForm.classList.remove('map__filters--disabled');
  unsetDisebled(filtersFormElements);
};

const disable = () => {
  filtersForm.classList.add('map__filters--disabled');
  setDisebled(filtersFormElements);
};


export {
  enable,
  disable,
};
