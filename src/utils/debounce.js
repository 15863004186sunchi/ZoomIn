export function debounce(fn, delay = 500) {
  let timer;
  return function () {
    let that = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      fn.apply(that, args);
    }, delay);
  };
}
