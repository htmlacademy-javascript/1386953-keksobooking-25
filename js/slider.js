const RANGE_SCOPE = {
  min: 0,
  max: 100000
};

const RANGE_FREQUENCY = 1;
const DEFAULT_QUANTITY = 5000;
const DECIMAL_NUMBER = 10;


const slider = document.querySelector('.ad-form__slider');
const formInputPrice = document.querySelector('#price');

formInputPrice.value = DEFAULT_QUANTITY;

noUiSlider.create(slider, {
  range: RANGE_SCOPE,
  start: DEFAULT_QUANTITY,
  step: RANGE_FREQUENCY,
  connect: 'lower',
  format: {
    to: (value) => parseInt(value, DECIMAL_NUMBER),
    from: (value) => parseFloat(value),
  },
});

slider.noUiSlider.on('update', () => {
  formInputPrice.value = slider.noUiSlider.get();
});

const reset = () => {
  slider.noUiSlider.updateOptions({
    range: RANGE_SCOPE,
    step: RANGE_FREQUENCY
  });
  slider.noUiSlider.set(DEFAULT_QUANTITY);
};


export {
  reset
};
