import {
  getPopupTextCapacity,
  renderFeaturesList
} from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardType = document.querySelector('#type');
const cardTypeValues = cardType.querySelectorAll('option');

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

  renderFeaturesList(cardFeaturesList, offer.features, 'popup__feature--');

  for (const cardTypeValue of cardTypeValues) {
    if (cardTypeValue.matches(`[value=${offer.type}]`)) {
      card.querySelector('.popup__type').textContent = cardTypeValue.textContent;
    }
  }

  offer.photos.forEach((photo) => {
    const cardPhoto = cardPhotoTemplate.cloneNode(true);
    cardPhoto.src = photo;

    cardPhotoContainer.append(cardPhoto);
  });

  return card;
});

export {
  renderCard
};
