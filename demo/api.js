import { changeLang } from "../apiExamples/changeLang";
import { customError } from "../apiExamples/error";
import { setReadonlyValue } from "../apiExamples/readonly";
import { swapInputValues } from "../apiExamples/swapValue";
import { programmaticallySetValue } from "../apiExamples/value";
import '../index.js';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    changeLang();
    customError();
    setReadonlyValue();
    swapInputValues();
    programmaticallySetValue();
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
