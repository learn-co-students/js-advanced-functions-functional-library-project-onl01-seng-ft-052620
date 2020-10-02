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

    flatten: function(array, shallow, flatArray=[]){
      if (shallow){
        array.forEach(element=>{
          if (Array.isArray(element)){
            for(const ele of element){
              flatArray.push(ele)
            }
          }else{
            flatArray.push(element)
          }
        })
      }else{
        array.forEach(element => {
          if (Array.isArray(element)){
            flatArray.concat(this.flatten(element, false, flatArray));
          }else{
            flatArray.push(element);
          }
  
       
        });
      }

      return flatArray;
    },

    uniq: function(array, isSorted=false, callBack=false){
      //unsorted situation
      let uniqueArray = []
      let arrayCopy = []
      array.forEach(element=> arrayCopy.push(element))

      if (isSorted){

      }else{
        for(const key in array){
          for(let i=key; i<arrayCopy.length; i++){
            if ((i !== key) && (!callBack)){
              arrayCopy[i] === array[key] ? arrayCopy[i] = "" : arrayCopy[i]
            }else if((i !== key) && (!!callBack)){
              callBack(arrayCopy[i]) === callBack(array[key]) ? arrayCopy[i] = "" : arrayCopy[i]
            }
          }
        }
      }
      arrayCopy.forEach(element=> (!!element) ? uniqueArray.push(element) : console.log(element))
      return uniqueArray;
    },
    keys: function(object){
      let allKeys = []
      for(const key in object){
        allKeys.push(key);
      }
      return allKeys;
    },

    values: function(object){
      let allValues = []
      for(const key in object){
        allValues.push(object[key]);
      }
      return allValues;
    },

    functions: function(object) {
      let allFunctions = []
      for (const key in object){
        if (typeof (object[key]) === 'function'){
          allFunctions.push(key)
        }
      }
      allFunctions = allFunctions.sort((a,b) => {
        return (a) - (b);
      })
      return allFunctions
    },


  }
})()

fi.libraryMethod()
