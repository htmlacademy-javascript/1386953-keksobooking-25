const advertForm = document.querySelector('.ad-form');

const pristine = new Pristine(advertForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__error'
}, false);
// проверка поля заголовка
const formInputTitle = advertForm.querySelector('#title');

function validateInputTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(formInputTitle, validateInputTitle, 'от 30 до 100 символов');

// проверка поля цены
const formInputPrice = advertForm.querySelector('#price');

function validateInputPrice(value) {
  return value >= 0 && value <= 100000;
}

pristine.addValidator(formInputPrice, validateInputPrice, 'от 0 до 100000');

// проверка селектора количества гостей
const guestCapacity = advertForm.querySelector('#capacity');

const maxGuestCapacity = {
  1: 1,
  2: [1, 2],
  3: [1, 2, 3],
  100: 0
};

function validateGuestCapacity(value) {
  const roomsNumber = advertForm.querySelector('[name="room_number"]:checked');
  return value.length && parseInt(value, 10) <= maxGuestCapacity[roomsNumber.value];

}

// function onRoomChange(evt) {
//   if (evt.target.matches('option')) {
//     capacityAmount.value = evt.target.value;
//   }
// }
// advertForm.addEventListener('change', onRoomChange);

// function validateCapacity() {
//   return capacityAmount.value <= roomAmount.value;
// }

// function capacityErrorMessage(value) {
//   if (capacityAmount.value > roomAmount.value) {
//     return `не больше ${value} ${pluralizeGuestsInGenitive(roomAmount.value)}`;
//   }
// }

pristine.addValidator(guestCapacity, validateGuestCapacity);

advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

/*
    3.1. Заголовок объявления:
        Обязательное текстовое поле;
        Минимальная длина — 30 символов;
        Максимальная длина — 100 символов.

    3.2. Цена за ночь:
        Обязательное поле;
        Числовое поле;
        Максимальное значение — 100000.

    Пользователь может вписать цену в поле, а может указать её перемещением ползунка слайдера. Слайдер реализуется сторонней библиотекой noUiSlider.

    3.3. Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:
        «Бунгало» — минимальная цена за ночь 0;
        «Квартира» — минимальная цена за ночь 1 000;
        «Отель» — минимальная цена за ночь 3 000;
        «Дом» — минимальная цена 5 000;
        «Дворец» — минимальная цена 10 000.
*/
