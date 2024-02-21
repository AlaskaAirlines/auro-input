import { changeLang } from "../apiExamples/changeLang";

export function initInputIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    changeLang("en");
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initInputIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
