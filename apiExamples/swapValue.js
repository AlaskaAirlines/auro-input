export function swapInputValues() {
  const btn = document.querySelector('#swapExampleBtn');
  const inputOne = document.querySelector('#swapExampleLeft');
  const inputTwo = document.querySelector('#swapExampleRight');

  btn.addEventListener('click', () => {
    const valueOne = inputOne.value;
    const valueTwo = inputTwo.value;

    inputOne.value = valueTwo;
    inputTwo.value = valueOne;
  });
}
