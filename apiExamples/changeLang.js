/**
 * Function used for the lang switch demo
 * @private
 * @param {string} languageCode - Pass in lang string to set lang attribute for the doc.
 */
export const changeLang = (languageCode) => {
  document.documentElement.setAttribute("lang", languageCode);
};
