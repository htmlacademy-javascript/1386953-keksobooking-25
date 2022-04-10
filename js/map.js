import { renderCard } from './card.js';
import { renderAddressInput } from './form.js';


const INICIAL_COORDINATE = {
  lat: 35.681729,
  lng: 139.753927
};
const MAP_ZOOM_DEFAULT = 15;

const MAIN_PIN_ICON = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const PIN_ICON = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


let map = null;
let markerGroup = null;


const mainPinMarker = L.marker(
  INICIAL_COORDINATE,
  {
    draggable: true,
    icon: MAIN_PIN_ICON
  },
);

const createMarker = ({ location: { lat, lng } }) => L.marker(
  {
    lat,
    lng
  },
  {
    icon: PIN_ICON
  },
);

const renderPins = (adverts) => {
  adverts.forEach((advert) => {
    const marker = createMarker(advert);
    marker.addTo(markerGroup).bindPopup(renderCard(advert));
  });
};

const clear = () => {
  markerGroup.clearLayers();
};

const reset = () => {
  if (map) {
    map.setView(INICIAL_COORDINATE, MAP_ZOOM_DEFAULT);
  }

  mainPinMarker.setLatLng(INICIAL_COORDINATE);
  renderAddressInput(INICIAL_COORDINATE);
};

const init = (onMapLoad) => {
  map = L.map('map-canvas');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

  markerGroup = L.layerGroup().addTo(map);

  mainPinMarker.addTo(map);

  mainPinMarker.on('move', (evt) => {
    const coordinates = evt.target.getLatLng();
    renderAddressInput(coordinates);
  });

  map.on('load', onMapLoad).setView(INICIAL_COORDINATE, MAP_ZOOM_DEFAULT);
};


export {
  renderPins,
  reset,
  clear,
  init
};
