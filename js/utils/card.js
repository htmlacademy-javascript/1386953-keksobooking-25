import { pluralize } from './pluralize.js';


const pluralizeRooms = (rooms) => pluralize(rooms, 'комната', 'комнаты', 'комнат');
const pluralizeGuestsInGenitive = (guests) => pluralize(guests, 'гостя', 'гостей', 'гостей');


const getPopupTextCapacity = (rooms, guests) => `${rooms} ${pluralizeRooms(rooms)} для ${guests} ${pluralizeGuestsInGenitive(guests)}`;


export {
  getPopupTextCapacity,
};
