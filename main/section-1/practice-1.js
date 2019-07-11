'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter((item) => {
    return collectionB.indexOf(item) != -1;
  });
}
