class Sorter {
  constructor(name) {
    this.arr = [];
  }

  add(element) {

this.arr.push(element);
  }

  at(index) {
  return this.arr[index];
  }

  get length() {
  return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

defaultComporator(a,b) {
  return a - b;
}

  sort(indices) {
      indices.sort(this.defaultComporator);
        var small = [];
    for(var j = 0; j < indices.length; j++){
      small.push(this.arr[indices[j]]);
    }
    if (this.correntCompare) {
      small.sort(this.correntCompare);
    } else {
    small.sort(this.defaultComporator);
  }
    for(var i = 0; i < small.length; i++){
      this.arr[indices[i]] = small[i];
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    this.correntCompare = compareFunction;
      }
}

module.exports = Sorter;
