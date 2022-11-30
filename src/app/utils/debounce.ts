// export const debounce = (func, timeout = 300) => {
//   let timer;

//   return (...args) => {
//     clearTimeout(timer);

//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }


export default function (func, timeout = 300) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}