const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,fn) { 
      if(collection instanceof Array) {
        for(let i = 0; i < collection.length; i++) {
         fn(collection[i], i, collection)
        }
      } else {
        for(let key in collection) {
          fn(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, fn) { 
      const output = []
      if(collection instanceof Array) {
        collection.forEach(e => output.push(e))
      }
      else {
        for(let key in collection) {
          output.push(fn(collection[key], key))
        }
      }
      return output;
    },



    reduce: function(collection, fn, acc = 0) {
      if(!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for(let element of collection){
        acc = fn(acc, element, collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(let element of collection) {
        if(predicate(element)) {
          return element
        }
      }
    },

    filter: function(collection, predicate) {
      const output = [];
      for(let element of collection) {
        if(predicate(element)) {
         output.push(element);
        }
      }
      return output;
    },

    size: function(collection) {
      let counter = 0;
      for(const element in collection) {
        counter++;
      }
      return counter;
    },


    first: function(array, n = 0) {
      if(n){
        return array.slice(0, n)
      }
      else{
        return array[0]
      }
    },

    last: function(array, n = 0) {
      if(n) {
        return array.slice(-n)
      }
      else {
        return array[array.length -1]
      }
    },

    compact: function(array) {
      const output = []
      for(let element of array) {
        if(element) {
          output.push(element);
        }
      }
      return output;
    },


    sortBy: function(array, fn) {
      let result = [...array]
      return result.sort(function(a,b){
        return fn(a) - fn(b);
      });
    },

  

    flatten: function(array, shallow){
      if(shallow){
        return array.flat(1);
      }
      else{
        return array.flat(Infinity);
      }
    }, 


    keys: function(object) {
      return Object.keys(object);
    }, 

    values: function(object) {
      return Object.values(object);
    },


    functions: function(object) {
      const output = [];
      for(const element in object) {
        if (typeof object[element] == 'function'){
          output.push(element)
        }
      }
      return output;
    },
  }
})()

fi.libraryMethod()
