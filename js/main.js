const getRandomIntNumber = (min, max) => {
  min = Math.abs(Math.trunc(min));
  max = Math.abs(Math.trunc(max));

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomIntNumber();

const getRandomFloatNumber = (min, max, digits) => {
  min = Math.abs(min);
  max = Math.abs(max);

  if (isNaN(min) || isNaN(max)) {
    return 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Number(Math.random() * (max - min + 1) + min).toFixed(digits);
};

getRandomFloatNumber();
