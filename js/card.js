import { createAdverts } from './data.js';

const advertMap = document.querySelector('.map');
const advertMapCanvas = advertMap.querySelector('.map__canvas');
const advertTemplate = document.querySelector('#card').content.querySelector('.popup');
const advertFragment = document.createDocumentFragment();
const adverts = createAdverts();

adverts.forEach(({ author, offer }) => {
  const advert = advertTemplate.cloneNode(true);

  advert.querySelector('.popup__avatar').src = author.avatar;
  advert.querySelector('.popup__title').textContent = offer.title;
  advert.querySelector('.popup__text--address').textContent = offer.address;
  advert.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advert.querySelector('.popup__type').textContent = offer.type;
  advert.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advert.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advert.querySelector('.popup__features').textContent = offer.features;
  advert.querySelector('.popup__description').textContent = offer.description;
  advert.querySelector('.popup__photo').src = offer.photos;
  advertFragment.append(advert);

});

advertMapCanvas.append(advertFragment.children[0]);