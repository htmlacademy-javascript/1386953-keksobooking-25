import { createAdverts } from '../data.js';


const loadData = (onLoad) => {
  const data = createAdverts();
  onLoad(data);
};


export {
  loadData
};
