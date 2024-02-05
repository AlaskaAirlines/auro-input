export function setReadonlyValue() {
  const elem = document.querySelector('#readonlyExample');

  // set value of auro-input element
  document.querySelector('#setReadonlyValueBtn').addEventListener('click', () => {
      elem.value = "Auro Alaska";
  });

  document.querySelector('#resetReadonlyValueBtn').addEventListener('click', () => {
    elem.value = undefined;
});
}
