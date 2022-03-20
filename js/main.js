import { createAdverts } from './data.js';
import { renderCard } from './card.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');

const adverts = createAdverts();

mapCanvas.append(renderCard(adverts[0]));
