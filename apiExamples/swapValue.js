export function swapInputValues(selectors) {
  const btn = document.querySelector(selectors[0]);
  const inputOne = document.querySelector(selectors[1]);
  const inputTwo = document.querySelector(selectors[2]);

  btn.addEventListener('click', () => {
    const valueOne = inputOne.value;
    const valueTwo = inputTwo.value;

    inputOne.value = valueTwo;
    inputTwo.value = valueOne;
  });
}
