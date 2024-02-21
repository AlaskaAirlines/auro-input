import { customError } from "../apiExamples/error";
import { setReadonlyValue } from "../apiExamples/readonly";
import { swapInputValues } from "../apiExamples/swapValue";
import { programmaticallySetValue } from "../apiExamples/value";

export function initInputApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    customError();
    setReadonlyValue();
    swapInputValues();
    programmaticallySetValue();
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initInputApiExamples(initCount + 1);
      }, 100);
    }
  }
}
