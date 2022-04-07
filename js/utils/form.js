import { pluralize } from './pluralize.js';

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

const setFormElementsDisabledMode = (elements, bool) => {
  elements.forEach((element) => {
    element.disabled = bool;
  });
};


export {
  pluralizeGuestsInGenitive,
  getPopupTextCapacity,
  renderFeaturesList,
  renderPhotos,
  setFormElementsDisabledMode
};
