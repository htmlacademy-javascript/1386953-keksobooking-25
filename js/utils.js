const pluralize = (value, one, two, five) => {
  const mod100 = Math.abs(value % 100);
  if (mod100 > 10 && mod100 < 20) {
    return five;
  }

  const mod10 = mod100 % 10;
  if (mod10 > 1 && mod10 < 5) {
    return two;
  }

  return mod10 === 1 ? one : five;
};

const pluralizeRooms = (rooms) => pluralize(rooms, 'комната', 'комнаты', 'комнат');
const pluralizeGuestsInGenitive = (guests) => pluralize(guests, 'гостя', 'гостей', 'гостей');

const getPopupTextCapacity = (rooms, guests) => `${rooms} ${pluralizeRooms(rooms)} для ${guests} ${pluralizeGuestsInGenitive(guests)}`;

const renderFeaturesList = (featuresList, features, classPrefix) => {
  const modifiers = features.map((feature) => `${classPrefix}${feature}`);

  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];

    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });
};

const renderPhotos = (container, template, photos) => {
  photos.forEach((photo) => {
    const cardPhoto = template.cloneNode(true);
    cardPhoto.src = photo;

    container.append(cardPhoto);
  });
};

const formElementsDisabledMode = (elements, bool) => {
  elements.forEach((element) => {
    element.disabled = bool;
  });
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export {
  pluralizeGuestsInGenitive,
  getPopupTextCapacity,
  renderFeaturesList,
  renderPhotos,
  formElementsDisabledMode,
  isEscapeKey,
  isEnterKey
};
