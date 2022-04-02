import { isEscapeKey, isEnterKey } from './utils.js';

const adForm = document.querySelector('.ad-form');
const fieldSets = adForm.querySelectorAll('.ad-form__element');

adForm.classList.add('ad-form--disabled');
fieldSets.forEach((fieldSet) => fieldSet.setAttribute('disabled', 'disabled'));

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldSets.forEach((fieldSet) => fieldSet.removeAttribute('disabled', 'disabled'));
};

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  fieldSets.forEach((fieldSet) => fieldSet.setAttribute('disabled', 'disabled'));
};

document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    enableForm();
    document.removeEventListener('keydown', disableForm);
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    disableForm();
    document.removeEventListener('keydown', enableForm);
  }
});
