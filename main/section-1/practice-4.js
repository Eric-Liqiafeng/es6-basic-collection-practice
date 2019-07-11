'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter((item) => {
    return objectB['value'].indexOf(item['key']) != -1;
  }).map(obj => obj.key);
}



