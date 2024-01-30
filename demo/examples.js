function initializeExample(elements, callback, elementsPendingReady, retryCount) {
  if (!elementsPendingReady) {
    elementsPendingReady = elementsPendingReady || [];

    if (typeof elements === 'string') {
      elementsPendingReady.push(elements);
    } else {
      elementsPendingReady = elements;
    }

    initializeExample(elements, callback, elementsPendingReady);
  } else {
    let readyCount = 0;

    elementsPendingReady.forEach(element => {
      if (document.querySelector(element) && document.querySelector(element)['ready']) {
        readyCount++;
      }
    });

    retryCount = retryCount || 0;

    if (elementsPendingReady.length != readyCount && retryCount < 10) {
      retryCount = retryCount + 1;
      setTimeout(initializeExample, 500, elements, callback, elementsPendingReady, retryCount);
    } else {
      callback(elements);
    }
  }
}

/**
 * custom Errors
 */
import { customError } from './../apiExamples/error';

(function(){
  initializeExample('#setCustomErrorExample', function(selector) {
    customError(document.querySelector(selector));
  });
}());

/**
 * set value programmatically
 */
 import { programmaticallySetValue } from './../apiExamples/value';

 (function(){
   initializeExample('#setProgrammaticValueExample', function(selector) {
     programmaticallySetValue(document.querySelector(selector));
   });
 }());

/**
 * swap values example
 */
import { swapInputValues } from './../apiExamples/swapValue';

(function(){
  initializeExample(['#swapExampleBtn', '#swapExampleLeft', '#swapExampleRight'], function(selectors) {
    swapInputValues(selectors);
  });
}());

/**
 * readonly example
 */
import { setReadonlyValue } from '../apiExamples/readonly';

(function(){
  initializeExample(['#readonlyExample', '#setReadonlyValueBtn'], function(selectors) {
    setReadonlyValue(selectors);
  });
}());
