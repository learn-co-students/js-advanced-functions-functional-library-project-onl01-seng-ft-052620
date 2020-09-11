const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      // const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      // for (let i = 0; i < newCollection.length; i++)
      //   fn(newCollection[i])

      // return collection;

      for (let accessor in collection) {
        fn(collection[accessor])
      }

      return collection;
    },

    map: function(collection, fn) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let result = [];

      for (let i = 0; i < newCollection.length; i++)
        result.push(fn(newCollection[i]))

      return result;
    },

    reduce: function (collection, callback, acc) {
      let copy = [...collection]
      acc = acc || copy.shift();

      for (let accessor in copy) {
        acc = callback(acc, copy[accessor], copy);
      }
      return acc;
    },

    find: function(collection, callback) {
      for (let accessor in collection) {
        let element = collection[accessor];
        if (callback(element)) {
          return element
        }
      }
    },

    filter: function(collection, callback) {
      let selectedArray = []
      for (let accessor in collection) {
        let element = collection[accessor];
        if (callback(element)) {
          selectedArray.push(element);
        }
      }
      return selectedArray;
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n = 1) {
      let count = 1;
      let array = [];

      for (let accessor in collection) {
        if (count <= n) {
          array.push(collection[accessor]);
          count++
        }
      }
      return array.length > 1 ? array : array[0]
    },

    last: function(collection, n = 1) {
      let startingIndex = collection.length - n

      return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
    },

    compact: function(collection) {
      return collection.filter(element => element)
    },

    sortBy: function (collection, callback) {
      const newArr = [...collection]
      return newArr.sort((a, b) => callback(a) - callback(b))
    },

    unpack: function (receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function (collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function (collection, isSorted, callback) {
      let newArray = [];
      let callbackReturn = [];

      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (!newArray.includes(element)) {
          if (callback) {
            let cn = callback(element);
            if (!callbackReturn.includes(cn)) {
              callbackReturn.push(cn);
              newArray.push(element);
            }
          } else {
            newArray.push(element);
          }
        }
      }
      return newArray;
    },


    keys: function (obj) {
      // Using for loop
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function (obj) {
      // Using for loop
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function (obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
