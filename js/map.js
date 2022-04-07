import { enableForms, disableForms } from './utils/activity.js';
import { renderCard } from './card.js';
import { createAdverts } from './data.js';


const MAP_COORDINATES_DEFAULT = {
  lat: 35.681729,
  lng: 139.753927
};
const MAP_ZOOM_DEFAULT = 8;
const DECIMAL_PLACES = 5;

const MAIN_PIN_OPTION = {
  pathToPic: '../img/main-pin.svg',
  sizeInPixels: [52, 52],
  pinTipCoordinates: [26, 52]
};

const PIN_OPTION = {
  pathToPic: '../img/pin.svg',
  sizeInPixels: [40, 40],
  pinTipCoordinates: [20, 40]
};


//Создание карты
const map = L.map('map-canvas');

disableForms();

map.on('load', () => {
  enableForms();
}).setView(MAP_COORDINATES_DEFAULT, MAP_ZOOM_DEFAULT);

//Добавление оболочки карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

//Создание главной иконки маркера
const mainPinIcon = L.icon(
  {
    iconUrl: MAIN_PIN_OPTION.pathToPic,
    iconSize: MAIN_PIN_OPTION.sizeInPixels,
    iconAnchor: MAIN_PIN_OPTION.pinTipCoordinates
  });

//Создания главного маркера
const mainPinMarker = L.marker(
  MAP_COORDINATES_DEFAULT,
  {
    draggable: true,
    icon: mainPinIcon
  },
);
//Добавление главного маркера на карту
mainPinMarker.addTo(map);
//Создание иконки для маркеров объявлений
const pinIcon = L.icon(
  {
    iconUrl: PIN_OPTION.pathToPic,
    iconSize: PIN_OPTION.sizeInPixels,
    iconAnchor: PIN_OPTION.pinTipCoordinates
  }
);
//Создание слоя для добавления группы маркеров
const markerGroup = L.layerGroup().addTo(map);

//Создание и добавление маркеров с балунами на карту из объявлений
const pinMarkers = createAdverts();

const createPinMarkers = (pin) => {
  const { location } = pin;
  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng
    },
    {
      icon: pinIcon
    },
  );
  marker.addTo(markerGroup).bindPopup(renderCard(pin));
};

pinMarkers.forEach((pin) => {
  createPinMarkers(pin);
});

//Событие перемещения главного маркера пользователем на карте
const addressField = document.querySelector('#address');


mainPinMarker.on('move', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressField.value = `${(coordinates.lat).toFixed(DECIMAL_PLACES)}, ${(coordinates.lng).toFixed(DECIMAL_PLACES)}`;
});
//Сбрас настроек по умолчанию, удаление меток объявлений
const resetMapToDefault = () => {
  mainPinMarker.setLatLng(MAP_COORDINATES_DEFAULT);
  map.setView(MAP_COORDINATES_DEFAULT, MAP_ZOOM_DEFAULT);
  markerGroup.clearLayers();
};

export { resetMapToDefault };
