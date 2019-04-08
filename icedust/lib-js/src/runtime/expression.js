function sum(collection){
  var total = 0;
  for(var i = 0 ; i < collection.length ; i++){
    total += collection[i];
  }
  return total;
}

function min(collection){
  var minimum = null;
  for(var i = 0 ; i < collection.length ; i++){
    if(minimum == null || collection[i] < minimum){
      minimum = collection[i];
    }
  }
  return minimum;
}

function max(collection){
  var minimum = null;
  for(var i = 0 ; i < collection.length ; i++){
    if(minimum == null || collection[i] > minimum){
      minimum = collection[i];
    }
  }
  return minimum;
}

function avg(collection){
  if(collection.length === 0){
    return null;
  }
  return sum(collection) / collection.length;
}

function concat(c1){
  return c1 === null ? "" : c1.join("")
}

function count(collection){
  console.log(isArray(collection) ?
    collection.length :
    collection === null ? 0 : 1)
  return isArray(collection) ?
    collection.length :
    collection === null ? 0 : 1;
}

function conj(collection){
  for(var i = 0 ; i < collection.length ; i++){
    if(collection[i] === false){
      return false;
    }
  }
  return true;
}

function disj(collection){
  for(var i = 0 ; i < collection.length ; i++){
    if(collection[i] === true){
      return true;
    }
  }
  return collection.isEmpty();
}

function indexOf(collection, elem){
  var index = collection.indexOf(elem);
  console.log(`indexOf(${collection.length}, ${elem}) = ${index === -1 ? null : index}`)
  return index === -1 ? null : index;
}

function elemAt(collection, index) {
  console.log(`elemAt(${collection.length}, ${index})`)
  return index < 0 || index >= collection.length ? null : collection[index];
}

function first(collection, n) {
  return arguments.length === 1 ?
    collection.length > 0 ? collection[0] : null
    : collection.slice(0, n);
}

function last(collection, n) {
  return arguments.length == 1 ?
    collection.length > 0 ? collection[collection.length - 1] : null
    : collection.slice(collection.length - n)
}

function dateToString(d) {
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var dayOfMonth = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var result = year + '-' + padZero(month) + '-' + padZero(dayOfMonth) + ' ' + padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
  return result
}

function padZero(n) {
  return (n < 10 ? '0' : '') + n
}

function isArray(x) {
  return x !== null & x !== undefined && x.constructor === Array;
}

module.exports = {
  sum: sum,
  min: min,
  max: max,
  avg: avg,
  concat: concat,
  count: count,
  conj: conj,
  disj: disj,
  indexOf: indexOf,
  elemAt: elemAt,
  first: first,
  dateToString: dateToString
};