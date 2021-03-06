const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  return Number(Math.random() * (max - min + 1) + min).toFixed(digits);
};

const getRandomArrayElement = (items) =>
  items[getRandomPositiveInteger(0, items.length - 1)];

const getRandomArrayElementToString = (items) =>
  String(items.splice(getRandomPositiveInteger(0, items.length - 1), 1));

const getRandomArrayElements = (items) => items.filter(() => Math.random() > 0.5);

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  getRandomArrayElementToString,
  getRandomArrayElements
};
