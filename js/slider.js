const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const resetButton = document.querySelector('.ad-form__reset');

valueElement.value = 5000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseInt(value, 10);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

resetButton.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100000,
    },
    step: 1
  });
  sliderElement.noUiSlider.set(5000);
});
