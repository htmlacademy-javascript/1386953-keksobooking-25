import {
  getPopupTextCapacity,
  renderFeaturesList,
  renderPhotos
} from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const offerTypesToRus = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель'
};

const renderCard = (({ author, offer }) => {
  const card = cardTemplate.cloneNode(true);
  const cardFeaturesContainer = card.querySelector('.popup__features');
  const cardFeaturesList = cardFeaturesContainer.querySelectorAll('.popup__feature');
  const cardPhotoContainer = card.querySelector('.popup__photos');
  const cardPhotoTemplate = cardPhotoContainer.querySelector('.popup__photo');
  cardPhotoContainer.innerHTML = '';

  card.querySelector('.popup__avatar').src = author.avatar;
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__text--capacity').textContent = getPopupTextCapacity(offer.rooms, offer.guests);
  card.querySelector('.popup__type').textContent = offerTypesToRus[offer.type];

  renderFeaturesList(cardFeaturesList, offer.features, 'popup__feature--');
  renderPhotos(cardPhotoContainer, cardPhotoTemplate, offer.photos);

  return card;
});

export {
  renderCard
};
