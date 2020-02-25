export const fetchGrads = () =>
  new Promise((resolve) => {
    setTimeout(
      () => fetch('./grads.json').then((response) => response.json().then((data) => resolve(data))),
      5000
    );
  });
