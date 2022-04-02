import { createAdverts } from './data.js';
import { renderCard } from './card.js';
import './form.js';
import './activity.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('.map__canvas');

const adverts = createAdverts();

mapCanvas.append(renderCard(adverts[0]));
