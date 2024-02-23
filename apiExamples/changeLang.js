/**
 * Function used for the lang switch demo
 * @private
 */
export const changeLang = () => {
  const englishButton = document.getElementById("enButton");
  const spanishButton = document.getElementById("esButton");

  englishButton.addEventListener("click", () => {
    document.documentElement.setAttribute("lang", "en");
  });

  spanishButton.addEventListener("click", () => {
    document.documentElement.setAttribute("lang", "es");
  });
};
