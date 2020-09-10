const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
    if(collection instanceof Array){
      for(let i = 0; i < collection.length; i++){
        fn (collection[i], i, collection)
      }
    }
    else{
      for(let key in collection){
        fn(collection[key], key, collection)
      }
    }
      return collection
  
    },

    map: function(collection, fn ) {
      // let newColl = (elements instanceof Array) ? elements : object.values(elements)
      let newArray = [];
      if (collection instanceof Array){
      collection.forEach(e => newArray.push(fn(e)))
      }
      else{
        for(let key in collection){
          newArray.push(fn(collection[key], key))
        }
      }
        return newArray
    },

        reduce: function(collection, callback, acc = 0) {
     if(!acc){
     acc = collection[0]
     collection = collection.slice(1);
    }
    for(let i = 0; i < collection.length; i++){
      acc = callback(acc, collection[i], collection)
    }
      return acc;
    },
  

    find: function(collection, predicate) {
      for(let e of collection){
        if (predicate(e)){
          return e 
        }
      }
    },
    filter: function(collection, predicate){
      let newArray = [];
      for(let e of collection){
        if (predicate(e)){
          newArray.push(e)
        }
      }
      return newArray;
    },

    size: function (collection){
      let length = (collection instanceof Array) ? collection.length : Object.keys(collection).length
      return length
    },
    first: function(array, n){
      if(n) {
        return array.splice(0, n)
      }
      else {
        return array[0];
      }
    },
    last: function(array, n){
      if(n){
        return array.splice(-n)
      }
      else{
        return array[array.length -1];
      }
    },
    //fi.compact(array) --Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
    compact: function(array){
      const result = [];
      for(let e of array){
        if (e){
          result.push(e)
        }
      }
      return result;
    },
//fi.sortBy(array, callback) --Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. The values from the original array should be retained within the sorted copy, just in ascending order.
    sortBy: function(array, callback){
      let newArray = [...array]
    return newArray.sort(function(a, b){
      return callback(a) - callback(b)
    })
    },
    //fi.flatten(array, [shallow]) Flattens a nested array (the nesting can be to any depth).If you pass true for the second argument, the array will only be flattened a single level.
    flatten: function(array, shallow = false){
      if (shallow){
        return array.flat(1);
      } else {
        return array.flat(Infinity)
      }
    },
    //fi.uniq(array, [isSorted], [callback]) Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurrence of each value is kept.
    uniq: function(array, isSorted, callback){

    },
    keys: function(obj){
      return Object.keys(obj)
    },
    values: function(obj){
      return Object.values(obj)
    },
    functions: function(obj){
      const array = []

      for (const key in obj) {
        if (typeof obj[key] === "function"){
          array.push(key)
        }
      }

      return array
    },
}
})()

fi.libraryMethod()
