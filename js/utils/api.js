// import { createAdverts } from '../data.js';


const loadData = (onLoad) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onLoad(data);
    });
  // const data = createAdverts();
};

const sendData = (onResolve, onReject, formData) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData
    },
  )
    .then((response) => {
      if (response.ok) {
        onResolve();
      } else {
        onReject('Не удалось отправить форму. Попробуйте ещё раз.');
      }
    })
    .catch(() => {
      onReject('Не удалось отправить форму. Попробуйте ещё раз.');
    });
};


export {
  loadData,
  sendData
};
