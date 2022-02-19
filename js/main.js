function getRandomInteger(min = 1, max = 100) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.round(Math.random() * (max - min + 1) + min);
}

getRandomInteger();

function getRandomFloat(min = 1.0, max = 100.0, digits = 1) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    [min, max] = [max, min];
  }

  const number = Math.random() * (max - min + 1) + min;

  return +number.toFixed(digits);
}

getRandomFloat();
