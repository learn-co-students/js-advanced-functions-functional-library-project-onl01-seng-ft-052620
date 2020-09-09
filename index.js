const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      } else if(typeof(collection) === "object") {
        for(let i = 0; i < Object.keys(collection).length; i++) {
        callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      } else if(typeof(collection) === "object") {
        let keys = Object.keys(collection)
        for(let i = 0; i < keys.length; i++) {
          newCollection.push(callback(collection[keys[i]], keys[i], collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc = 0) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, callback) {
      for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, callback) {
      let matches = []
      for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])) {
          matches.push(collection[i])
        }
      }
      return matches
    },

    size: function(collection) {
      if(Array.isArray(collection)) {
        return collection.length;
      } else if (typeof(collection) === "object") {
        return Object.keys(collection).length
      }
    },

    first: function(collection, num = 1) {
      if(num === 1) {
        return (collection[0])
      }
      return collection.slice(0, num)
    },

    last: function(collection, num = 1) {
      if(num === 1) {
        return collection[collection.length - 1]
      }
      return collection.slice(collection.length - num, collection.length)
    },

    compact: function(collection) {
      let compacted = []
      for(let i = 0; i < collection.length; i++) {
        if(collection[i]) {
          compacted.push(collection[i])
        }
      }
      return compacted
    },

    sortBy: function(collection, callback) {
      let newCollection = [...collection]
      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow = false) {
      let newCollection = []
      let level = -1
      function isItAnArray(e) {
        if(Array.isArray(e)) {
          level += 1
          if (shallow && level >= 2) {
            newCollection.push(e)
            return
          }
          return fi.each(e, isItAnArray)
        } else {
          level -= 1
          newCollection.push(e)
        }
      }
      isItAnArray(collection)

      return newCollection
    },

    uniq: function(collection, isSorted, callback){
      
    },

    values: function(collection) {
      return Object.values(collection)
    },

    functions: function(object) {
      let functionArray = []

      for (let key in object) {
        if(typeof object[key] === "function") {
          functionArray.push(key)
        }
      }

      return functionArray
    },


  }
})()

fi.libraryMethod()
