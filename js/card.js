import {
  getPopupTextCapacity,
} from './utils/card.js';


const offerTypeEnToRu = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель'
};


const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardPhotoTemplate = cardTemplate.querySelector('.popup__photo').cloneNode(true);

cardTemplate.querySelector('.popup__features').innerHTML = '';
cardTemplate.querySelector('.popup__photos').innerHTML = '';


const renderFeature = (feature) => {
  const container = document.createElement('div');
  container.innerHTML = (
    `<li class="popup__feature popup__feature--${feature}">
    </li>`
  );

  return container.firstElementChild;
};

const renderFeatures = (container, features) => {
  container.append(...features.map(renderFeature));
};


const renderPhoto = (photo) => {
  const cardPhoto = cardPhotoTemplate.cloneNode(true);
  cardPhoto.src = photo;

  return cardPhoto;
};

const renderPhotos = (container, photos) => {
  container.append(...photos.map(renderPhoto));
};


const isNotEmptyArray = (items) => Array.isArray(items) && items.length > 0;


const renderCard = (({ author, offer }) => {
  const card = cardTemplate.cloneNode(true);
  const cardFeaturesContainer = card.querySelector('.popup__features');
  const cardPhotoContainer = card.querySelector('.popup__photos');

  card.querySelector('.popup__avatar').src = author.avatar ? author.avatar : '';
  card.querySelector('.popup__title').textContent = offer.title ? offer.title : '';
  card.querySelector('.popup__text--address').textContent = offer.address ? offer.address : '';
  card.querySelector('.popup__text--price').textContent = offer.price ? `${offer.price} ₽/ночь` : '';
  card.querySelector('.popup__description').textContent = offer.description ? offer.description : '';
  card.querySelector('.popup__text--capacity').textContent = (offer.rooms && offer.checkout) ? getPopupTextCapacity(offer.rooms, offer.guests) : '';
  card.querySelector('.popup__type').textContent = offer.type ? offerTypeEnToRu[offer.type] : '';
  card.querySelector('.popup__text--time').textContent = (offer.checkin && offer.checkout) ? `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` : '';

  if (isNotEmptyArray(offer.features)) {
    renderFeatures(cardFeaturesContainer, offer.features);
  }
  if (isNotEmptyArray(offer.photos)) {
    renderPhotos(cardPhotoContainer, offer.photos);
  }

  return card;
});


export {
  renderCard,
};
