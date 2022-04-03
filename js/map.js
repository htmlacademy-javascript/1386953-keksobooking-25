import { enableForms, disableForms } from './activity.js';
import { renderCard } from './card.js';
import { createAdverts } from './data.js';

const resetButton = document.querySelector('.ad-form__reset');
const addressField = document.querySelector('#address');
const mapContainer = document.querySelector('.map');
const mapCanvas = mapContainer.querySelector('.map__canvas');

//Создание карты
const map = L.map('map-canvas').on('load', () => {
  if (mapCanvas) {
    enableForms();
  } else {
    disableForms();
  }
}).setView(
  {
    lat: 35.681729,
    lng: 139.753927
  }, 8);

//Добавление оболочки карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

//Создание главной иконки маркера
const mainPinIcon = L.icon(
  {
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

//Создания главного маркера
const mainPinMarker = L.marker(
  {
    lat: 35.681729,
    lng: 139.753927
  },
  {
    draggable: true,
    icon: mainPinIcon
  },
);
//Добавление главного маркера на карту
mainPinMarker.addTo(map);
//Создание иконки для маркеров объявлений
const pointsIcon = L.icon(
  {
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }
);
//Создание слоя для добавления группы маркеров
const markerGroup = L.layerGroup().addTo(map);

//Создание и добавление маркеров с балунами на карту из объявлений
const points = createAdverts();

const createPoints = (point) => {
  const { location } = point;
  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng
    },
    {
      icon: pointsIcon
    },
  );
  marker.addTo(markerGroup).bindPopup(renderCard(point));
};

points.forEach((point) => {
  createPoints(point);
});
addressField.textContent = '1234';
//Событие перемещения главного маркера пользователем на карте
mainPinMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  addressField.value = `${(address.lat).toFixed(5)}, ${(address.lng).toFixed(5)}`;
});
//Сбрас настроек по умолчанию, удаление меток объявлений
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(
    {
      lat: 35.681729,
      lng: 139.753927
    });
  map.setView(
    {
      lat: 35.681729,
      lng: 139.753927
    }, 8);
  markerGroup.clearLayers();
});
