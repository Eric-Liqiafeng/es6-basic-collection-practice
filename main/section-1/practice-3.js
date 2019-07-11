'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter((item) => {
    return objectB['value'].indexOf(item) != -1;
  });
}
