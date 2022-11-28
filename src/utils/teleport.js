export const teleport = ({ toSelector, elementSelector }) => {
  document.querySelector(toSelector)
    .after(document.querySelector(elementSelector));
};