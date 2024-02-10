const watchedItems = new Set();


/**
 * Function for setting the value of the lang attribute.
 * @private
 * @param {object} item - Individual DOM node from set of watchedItems.
 * @param {string} lang - Current language set for the document.
 */
function setLang(item, lang) {

  /**
   * It is desired that if the lang is `en` to maintain `undefined` as not to
   * add the `lang` attribute to the individual element.
   */
  item.lang = lang === 'en' ? undefined : lang;
}

/**
 * Change handler for MutationObserver() callback.
 * @private
 * @param {MutationRecord[]} mutationList - Observed list of mutations.
 */
function handleChange(mutationList) {
  const [mutation] = mutationList;
  const lang = mutation.target.getAttribute('lang');
  watchedItems.forEach((item) => {
    setLang(item, lang);
  });
}

if (typeof window !== "undefined") {
  if (window.MutationObserver) {
    const observer = new MutationObserver(handleChange);
    observer.observe(document.documentElement, { attributes: true,
      attributeFilter: ['lang'] });
  }
}

const stringsES = {
  'optional': 'opcional',
  'validCard': 'Por favor, introduzca un número de tarjeta de crédito válida.',
  'email': 'Introduzca una dirección de correo electrónico válida (nombre@dominio.com).',
  'password': `Las contraseñas válidas deben constar de al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.`,
  'creditcard': 'Por favor, introduzca un número de tarjeta de crédito válida.',
  'dateMMDDYYYY': 'Ingrese una fecha completa en el formato MM/DD/AAAA',
  'dateMMYY': 'Ingrese una fecha completa en el formato MM/AA',
  'dateMMYYYY': 'Ingrese una fecha completa en el formato MM/AAAA',
  'dateYYYYMMDD': 'Ingrese una fecha completa en el formato AAAA/MM/DD'
};

const stringsEN = {
  'optional': 'optional',
  'validCard': 'Please enter a valid credit card number.',
  'email': 'Please enter a valid email address (name@domain.com).',
  'password': 'Valid passwords must consist of at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.',
  'creditcard': 'Please enter a valid credit card number.',
  'dateMMDDYYYY': 'Please enter a complete date in the format MM/DD/YYYY',
  'dateMMYY': 'Please enter a complete date in the format MM/YY',
  'dateMMYYYY': 'Please enter a complete date in the format MM/YYYY',
  'dateYYYYMMDD': 'Please enter a complete date in the format YYYY/MM/DD'
};

/**
 * Function to support the selected of a string in the set lang.
 * @param {string} lang - Requested lang for content return.
 * @param {string} requestedString - String requested in context.
 * @private
 * @returns {string} Value of string request.
 */
export default function i18n(lang, requestedString) {
  if (lang === 'es') {
    return stringsES[requestedString];
  }

  return stringsEN[requestedString];
}

/**
 * @private
 * @param {object} element - Pass in the scope of the element in use.
 */
export function notifyOnLangChange(element) {
  if (!element.lang) {
    setLang(element, document.documentElement.lang);
  }
  watchedItems.add(element);
}

/**
 * @private
 * @param {object} element - Pass in the scope of the element in use.
 */
export function stopNotifyingOnLangChange(element) {
  watchedItems.delete(element);
}
