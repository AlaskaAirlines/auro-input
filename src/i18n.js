const watchedItems = new Set();

/**
 * @param {MutationRecord[]} mutationList
 */
function handleChange(mutationList) {
  const [mutation] = mutationList;
  const lang = mutation.target.getAttribute('lang');
  watchedItems.forEach((item) => {

    /**
     * It is desired that if the lang is `en` to maintain `undefined` as not to
     * add the `lang` attribute to the individual element.
     */
    item.lang = lang === 'en' ? undefined : lang;
  });
}

if (window.MutationObserver) {
  const observer = new MutationObserver(handleChange);
  observer.observe(document.documentElement, { attributes: true,
    attributeFilter: ['lang'] });
}

/**
 * Object containing default copy for this element.
 * Supported languages: en, es.
 * @private
 */
const stringsES = {
  'optional': 'opcional',
  'validCard': 'Por favor, introduzca un número de tarjeta de crédito válida.',
  'email': 'Introduzca una dirección de correo electrónico válida (nombre@dominio.com).',
  'password': `Las contraseñas válidas deben constar de al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.`,
  'creditcard': 'Por favor, introduzca un número de tarjeta de crédito válida.'
};

const stringsEN = {
  'optional': 'optional',
  'validCard': 'Please enter a valid credit card number.',
  'email': 'Please enter a valid email address (name@domain.com).',
  'password': 'Valid passwords must consist of at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.',
  'creditcard': 'Please enter a valid credit card number.'
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

export function notifyOnLangChange(element) {
  watchedItems.add(element);
}

export function stopNotifyingOnLangChange(element) {
  watchedItems.delete(element);
}
