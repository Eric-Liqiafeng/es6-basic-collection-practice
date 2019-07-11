'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  // return collectionA.filter((itemA) => {
  return collectionA.filter((itemA) => {
    return collectionB.filter((itemB) => {
      return itemB.indexOf(itemA) != -1
    }).length > 0;
  });
}
