const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      if (Array.isArray(collection))
        collection.forEach(item => callBack())
      else{
        for(let key in collection){
          callBack(collection[key])
        }
      }  
      return collection
    },

    map: function(collection, callback) {
      let newCollection = [];
      if(Array.isArray(collection)){
        collection.forEach(item => newCollection.push(callback(item)))
      }
      else{
        for(let key in collection){
          newCollection.push(callback(collection[key]))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback ,acc) {
      collection.forEach(item => acc ? (acc = callback(acc, item, collection)) : (acc = callback(0, item, collection)))
      return acc
    },

    find: function(collection, predicate){
      let value = undefined;
      for(const item of collection){
        if (predicate(item)){
          value = item;
          break;
        }
      }
      return value
    },

    filter: function(collection, predicate){
      let value = [];
      for(const item of collection){
        if (predicate(item)){
          value.push(item);
        }
      }
      return value
    },

    size: function(collection){
      let size = 0;
      for(const key in collection){
        size++
      }
      return size
    },

    first: function(array, number){
      let value 
      if (number) {
        value = []
        for(let i = 0; i < number; i++){
          value.push(array[i])
        }
      }else{
        value = array[0]
      }
      return value
    },

    last: function(array, number){
      let value 
      if (number) {
        value = []
        number = array.length - number

        for(let i = number; i < array.length; i++){
          value.push(array[i])
        }
      }else{
        number = array.length-1
        value = array[number]
      }
      return value
    },

    compact: function(array){
      let compactArray = []
      array.forEach(element => {
        if (!!element){
          compactArray.push(element);
        }
      })
      return compactArray
    },

    sortBy: function(array, callback){
      let newArray = []
      
      for(let i =0; i < array.length; i++){
        newArray.push(array[i])
      }
      newArray = newArray.sort((a,b) => {
        return callback(a) - callback(b);
      })
      // console.log(newArray)
      return newArray
    },

    flatten: function(array, shallow){
      array.forEach(element => {
        if (Array.isArray)
      })
    },

    

    functions: function() {

    },


  }
})()

fi.libraryMethod()
