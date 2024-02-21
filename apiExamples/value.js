export function programmaticallySetValue() {
  const elem = document.querySelector('#setProgrammaticValueExample');
  
  // set value of auro-input element
  document.querySelector('#setValidValueBtn').addEventListener('click', () => {
      elem.value = "Alaska Airlines is the best";
  });

  // reset the value of auro-input element
  document.querySelector('#resetValueBtn').addEventListener('click', () => {
      elem.value = '';
  });
}
