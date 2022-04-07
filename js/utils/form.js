const setFormElementsDisabledMode = (elements, bool) => {
  elements.forEach((element) => {
    element.disabled = bool;
  });
};


export { setFormElementsDisabledMode };
