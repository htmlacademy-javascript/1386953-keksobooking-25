const map = document.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardFragment = document.createDocumentFragment();
const cardType = document.querySelector('#type');
const cardTypeValues = cardType.querySelectorAll('option');

const renderCard = (({ author, offer }) => {
  const cardList = cardTemplate.cloneNode(true);
  const cardFeaturesContainer = cardList.querySelector('.popup__features');
  const cardFeaturesList = cardFeaturesContainer.querySelectorAll('.popup__feature');
  const cardPhotoContainer = cardList.querySelector('.popup__photos');
  const cardPhotoTemplate = cardPhotoContainer.querySelector('.popup__photo');
  cardPhotoContainer.innerHTML = '';

  cardList.querySelector('.popup__avatar').src = author.avatar;
  cardList.querySelector('.popup__title').textContent = offer.title;
  cardList.querySelector('.popup__text--address').textContent = offer.address;
  cardList.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  for (const cardTypeValue of cardTypeValues) {
    if (cardTypeValue.matches(`[value=${offer.type}]`)) {
      cardList.querySelector('.popup__type').textContent = cardTypeValue.textContent;
    }
  }

  cardList.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardList.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  cardFeaturesList.forEach((cardFeatureItem) => {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    const modifier = cardFeatureItem.classList[1];

    if (!modifiers.includes(modifier)) {
      cardFeatureItem.remove();
    }
  });

  cardList.querySelector('.popup__description').textContent = offer.description;

  offer.photos.forEach((photo) => {
    const cardPhoto = cardPhotoTemplate.cloneNode(true);
    cardPhoto.src = photo;

    cardPhotoContainer.append(cardPhoto);
  });
  cardFragment.append(cardList);
});

mapCanvas.append(cardFragment.children[0]);
export { renderCard };
