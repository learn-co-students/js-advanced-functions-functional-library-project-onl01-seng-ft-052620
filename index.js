const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection){
        callback(collection[key], key, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      for (const key in collection){
        newCollection.push(callback(collection[key], key, collection));
      }
      return newCollection;
    },

    reduce: function(collection, callback, memo) {
      for (const element of collection){
        if (memo!==undefined){
          memo = callback(memo, element, collection);
        } else {
          memo = element;
        }
      }
      return memo;
    },

    find: function(collection, predicate) {
      for (const element of collection){
        if (predicate(element)){return element}
      }
    },

    filter: function(collection, predicate){
      const newCollection = [];
      for (const key in collection){
        if (predicate(collection[key])){
          newCollection.push(collection[key]);
        }
      }
      return newCollection;
    },

    size: function(collection){
      let size = 0;
      for (const key in collection){size++;}
      return size;
    },

    first: function(array, n=1){
      if (n===1){return array[0]}
      const newArray = [];
      for (let i=0; i < n; i++){
        newArray.push(array[i])
      }
      return newArray;
    },

    last: function(array, n=1){
      if (n===1){return array[this.size(array)-1]}
      const newArray = [];
      for (let i=this.size(array)-n; i < this.size(array); i++){

        newArray.push(array[i]);
      }
      return newArray;
    },

    compact: function(array){
      const newArray = [];
      for (const elem of array){
        if(elem){newArray.push(elem)}
      }
      return newArray;
    },

    sortBy: function(array, callback){
      const sortedArray = [];
      for (let i=0; i < this.size(array); i++){
        let counter = 0;
        for (let j=0; j < this.size(array); j++){
          if (callback(array[i]) > callback(array[j])){
            counter++;
          }
        }
        while (sortedArray[counter]){
          counter++;
        }
        sortedArray[counter] = array[i];
      }
      return sortedArray;
    },

    flatten: function(array, shallow=false){
      let newArray = [];
      for (let i=0; i < this.size(array); i++){
        let val;
        if (typeof array[i] !== "number" && !shallow){
          val = this.flatten(array[i])
        } else {
          val = array[i]
        }
        newArray = newArray.concat(val);
      }
      return newArray;
    },

    uniq: function(array, isSorted=false, callback=x=>x){
      const uniqArray = [];
      const elementTracker = {};
      for (const elem of array){
        if (!elementTracker[JSON.stringify(callback(elem))]){
          elementTracker[JSON.stringify(callback(elem))] = true;
          uniqArray.push(elem);
        }
      }
      return uniqArray;
    },

    keys: function(object){
      const keys = [];
      for (const key in object){keys.push(key)}
      return keys;
    },

    values: function(object){
      const values = [];
      for (const key in object){values.push(object[key])}
      return values;
    },

    functions: function(object){
      return this.filter(object, property=> typeof property === "function")
    }

  }
})()

fi.libraryMethod()
