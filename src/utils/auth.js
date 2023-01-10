export const getToken = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToken = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

// const generateRandomHexColor = () =>
//   `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
// console.log(generateRandomHexColor());
