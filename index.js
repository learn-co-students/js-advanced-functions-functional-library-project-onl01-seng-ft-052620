const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //collection functions
    each: function(collection, callback) {
      let newCollection = Object.values(collection)
      for (const e of newCollection) {
        callback(e)
      }
      return collection
    },
    
    map: function(collection, callback) {
      let collectionValues = Object.values(collection)
      let newCollection = []
      for (const e of collectionValues) {
        newCollection.push(callback(e))
      }
      return newCollection
    },
    
    reduce: function(collection, callback, acc) {
      let collectionValues = Object.values(collection)
      let memo
      acc ? memo = acc : memo = collectionValues.shift()
      for (const e of collectionValues) {
        memo = callback(memo, e)
      }
      return memo
    },
    
    find: function(collection, predicate) {
      let collectionValues = Object.values(collection)
      for (const e of collectionValues) {
        if (predicate(e)) {
          return e
        }
      }
    },
    
    filter: function(collection, predicate) {
      let collectionValues = Object.values(collection)
      let newArray = []
      for (const e of collectionValues) {
        if (predicate(e)) {
          newArray.push(e)
        }
      }
      return newArray
    },
    
    size: function(collection) {
      let i = 0
      for (const k in collection) {
        i ++
      }
      return i
    },


    //array functions
    first: function(array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(-n) : array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []
      for (const e of array) {
        e ? newArray.push(e) : newArray
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newObject = []

      for (const e of array) {
        newObject.push({
          original: e,
          value: callback(e)})
      }

      newObject.sort(function(a, b) {
          if (a.value < b.value) {
            return -1;
          } else if (a.value > b.vlaue) {
            return 1;
          } else {
            return 0;
          }
        })

      return newObject.map(e=> e.original)
    },

    flatten: function(array, shallow) {
      let newArray = [...array]
      if (shallow) {
        newArray = fi.flattenArray(newArray)
      } else {
      while (newArray.find(element => typeof element === "object")) {
        newArray = fi.flattenArray(newArray)
      }
    }
      return newArray
    },

    flattenArray: function(array) {
      let newArray = []
      for (const e of array) {
        if (typeof e === "object") {
          e.forEach(element => newArray.push(element))
        } else {
          newArray.push(e)
        }
      }
      return newArray
    },

    uniq: function(array, isSorted, callback) {
      let result = []
      if (callback) {
        let valueArray = [...new Set(array.map(e=> callback(e)))]
        for (const value of valueArray) {
          result.push(array.find( e => callback(e) === value))
        }
      } else {
        result = [...new Set(array)]
      }
      return result

      /*
      Or use the pre ES6 code:
      const distinct = (value, index, self) => self.indexOf(value) === index
      const distinctValues = array.filter(distinct)
      return distinctValues
      */
    },

    //Object functions
    keys: function(object) {
      let array = []
      for (const k in object) {
        array.push(k)
      }
      return array
    },

    values: function(object) {
      let array = []
      for (const k in object) {
        array.push(object[k])
      }
      return array
    },

    functions: function(object) {
      let functionNames = []
      let functionList = fi.filter(object, e => typeof e === "function")
      for (const fn of functionList) {
        functionNames.push(fi.find(fi.keys(object), key => object[key] === fn))
      }
      return fi.sortBy(functionNames, e => e)
    },


  }
})()

fi.libraryMethod()
