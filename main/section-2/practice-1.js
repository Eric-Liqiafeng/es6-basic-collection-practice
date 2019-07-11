'use strict';

module.exports = function countSameElements(collection) {
  const  collectionTemp = Array.from(new Set(collection));
  return collectionTemp.map(value => {
    return {key: value, count: collection.filter(x => x === value).length}
  })
}
