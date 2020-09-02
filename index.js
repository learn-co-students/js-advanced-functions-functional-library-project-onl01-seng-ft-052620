const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(elements, alert) {
      let newCollection = (elements instanceof Array) ? elements : Object.values(elements)
      for (let i = 0; i<newCollection.length; i++){
        alert(newCollection[i])
      }
      return elements
    },

    map: function(elements, thing) {
      let newCollection = (elements instanceof Array) ? elements : Object.values(elements)
      let newElements = []
      for (let i = 0; i<newCollection.length; i++){
        newElements.push(thing(newCollection[i]))
      }
      return newElements
    },

    reduce: function(collection, callback, acc) {
      if (!acc){
        acc = collection[0]
        collection = collection.slice(1)
      }
      
      for (let i = 0; i<collection.length; i++){
        acc = callback(acc, collection[i], collection)
        
      }
      return acc
    },

    find: function(collection, callback) {
      for (let i = 0; i<collection.length; i++){
        if (callback(collection[i])=== true){
          return collection[i]
        }

        
      }

    },

    filter: function(collection, callback){
      let array = []
      for (let i = 0; i<collection.length; i++){
        if (callback(collection[i])=== true){
          array.push(collection[i])
        }
      }
      return array

    },

    size: function (collection){
      let length = (collection instanceof Array) ? collection.length : Object.keys(collection).length
      return length
    },

    first: function(collection, n){
      return (n) ? collection.slice(0, n) : collection[0]
      
    },

    last: function(collection, n){
      return (n) ? collection.slice(collection.length-n, collection.length) : collection[collection.length-1]
    },

    compact: function(collection){
      const falseys = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !falseys.has(element))
    },
    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    // cheated for flatten and uniq
      unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
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

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },



    keys: function(collection){
      return Object.keys(collection)
    },
    values: function(collection){
      return Object.values(collection)
    },
    functions: function(obj){
      let functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames
    }




  }
})()

fi.libraryMethod()
