import {
  enable as enableForm,
  disable as disableForm,
  reset as resetForm,
  // setResetHandler,
  setSubmitHandler
} from './form.js';
import {
  renderPins,
  reset as resetMap,
  // clear as crearMap,
  init as initMap,
} from './map.js';
import {
  enable as enableFilters,
  disable as disableFilters,
  reset as resetFilters,
} from './filters.js';
import {
  reset as resetSlider
} from './slider.js';
import {
  loadData,
  sendData
} from './utils/api.js';
import {
  showAlert
} from './utils/popups.js';


const resetPage = () => {
  resetForm();
  resetMap();
  resetFilters();
  resetSlider();
};

let adverts = [];

resetPage();
disableForm();
disableFilters();

initMap(() => {
  enableForm();
  enableFilters();

  loadData((data) => {
    adverts = data;

    renderPins(adverts);
  });

  setSubmitHandler((formData) => {
    sendData(
      () => formData(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      formData
    );
    resetPage();
  });
});
