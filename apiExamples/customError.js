export function customError(elem) {
  // set custom error
  document.querySelector('#setCustomErrorBtn').addEventListener('click', () => {
    elem.error = "Custom Error Message";
  })

  // remove custom error
  document.querySelector('#setCustomErrorClearBtn').addEventListener('click', () => {
    elem.removeAttribute('error');
  })
}
