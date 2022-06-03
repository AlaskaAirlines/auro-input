let elem = document.querySelector('auro-input#errorDateRange');

elem.addEventListener('input', () => {
  validateDateRange(elem.value);
})

function validateDateRange(value) {
  if (value.length === 10) {
    const maxAge = 120;
    const date = new Date();
    date.setDate( date.getDate() );
    date.setFullYear( date.getFullYear() - maxAge );

    const valueDate = Date.parse(value)

    if (valueDate < date) {
      elem.setAttribute('error', 'Birthday can not be more than 120 years ago.');
    } else {
      elem.removeAttribute('error');
    }
  }
}

