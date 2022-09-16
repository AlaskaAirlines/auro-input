function initializeExample(element, callback, retryCount) {
  const elem = document.querySelector(element);

  if (!elem || !elem.ready) {
    // If the component is not ready, retry until it is
    if (!retryCount && retryCount != 0) {
      retryCount = 0;
    } else {
      retryCount += 1;
    }

    if (retryCount < 10) {
      setTimeout(initializeExample, 500, element, callback, retryCount);
    } else {
      console.error('Unable to initialize functional example code for:', element);
    }
  } else {
    callback(elem);
  }
}

/**
 * custom Errors
 */
import { customError } from './../apiExamples/customError';

(function(){
  initializeExample('#setCustomErrorExample', function(elem) {
    customError(elem);
  });
}());