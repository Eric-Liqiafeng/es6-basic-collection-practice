'use strict';

module.exports = function countSameElements(collection) {
  let collectionNormal = collection.map(x => x.substring(0, 1));
  let collectionFormat = collection.filter(x => x.length > 1);
  collectionFormat.map(x => {
    let el = x.substring(0, 1);
    let count = parseInt(x.replace(/[^0-9]/ig,""));
    collectionNormal = collectionNormal.concat((new Array(count - 1)).fill(el));
  })
  collection = collectionNormal;
  const collectionTemp = Array.from(new Set(collection));
  return collectionTemp.map(value => {
    return {name: value, summary: collection.filter(x => x === value).length}
  });
}