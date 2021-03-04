const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    // ###Problem bellow
    // use of the word thing
    // calling a callback an action. is that some misnomer? 
    each: function(data, action) {
      // take in data and make a shallow copy if its already an array = otherwise make it into an array so we can loop over it
        const newThing = (data.isArray) ? data.slice() : Object.values(data)
        // now shallow copy as array, we loop over the length, and do some action on each iteration
        for(let i = 0; i < newThing.length; i++)
          action(newThing[i])
        // return the unaltered original array
        return data
    },
    //  ### PROBLEMS
    // this data sanitation process seems repetitive... 
    map: function(data, callback) {
      // what is the purpose of map? to return a modified array
      const modifiedArray = []
      // verify the data-type. is it iterable?
      let sanitized_data = (data.isArray) ? data.slice() : Object.values(data)
      // let's use our function library's each method
      for (let i = 0; i < sanitized_data.length; i++){
        modifiedArray.push(callback(sanitized_data[i]))
      }
      // sanitized_data.forEach(item => modifiedArray.push(callback(item)))
      
      return modifiedArray
    },

    reduce: function(collection, callback, acc) {
      // what is the purpose of reduce?
      // Reduce boils down a collection of values into a single value
      // callback is our action that boils the collection down to a single value
      // it is a function itself, maybe does a + b, a + (b*3)
      // accumulator is initial value of state
      // return single value, declared here.
      // this value is the culmination of working being down repetively
      // if acc exists, assign to value, if no exits, value is default zero
      let value
      // value declared, now assign initial state of function
      if (acc != null){
        value = acc
      } else {
        value = 0
      }
      // evaluate what collection is
      // sees like a lot of work to do each time
      // since i know the mocha test is only an array [ 1, 2, 3, 4 ]
      // and im looking for the final value to be 10
      // we are dealing with addition and assignment
      for (let i = 0; i < collection.length; i++){
        let currentValue = collection[i]
      // run callback on each -  that call back   
        value = callback(value, currentValue)
      };
      // returned value
      return value;
      // what are the bugs?
      // if we are not given an array, but a hash, the data has not be sanitized for work
      // meh, whatever.
    },

    find: function(collection, predicate) {
      let element_found
      let found = false
      
      for(let i = 0; i < collection.length; i++){
        if (found == false) {
          if (predicate(collection[i])) {
            element_found = collection[i]
            found = true
          }  
        } else if (found == true){
          break;
        }
      }

      return element_found
    },

    filter: function(collection, predicate) {
      // if it does not meet the condition, remove it from array
      // return modified array of only what meets the condition
      let modified_array = new Array

      collection.forEach(element => {
        if(predicate(element)) {
          modified_array.push(element)
        }
      })
      return modified_array
    },

    size: function(collection) {
      let count = 0

      for (let element in collection) {
        if (element){
          count ++
        }
      }
      
      return count
    },

    first: function(array, n=0) {
      if (n) {
        return array.splice(0,n)
      } else {
        return array[0]
      }
    },

    last: function(array, n=0) {
      if (n) {
        return array.splice(-n)
      } else {
        return array[array.length-1]
      }
    },

    compact: function(array) {
      const truthy_elements_only = []
      for(let element of array){
        if (element){
          truthy_elements_only.push(element)
        }
      }
      return truthy_elements_only
    },

    sortBy: function(array, callback){
      let modified_array = [...array]
      return modified_array.sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow=false){
      if (shallow){
        return array.flat(1)
      }else {
        return array.flat(Infinity)
      }
    }
  
// end function
// last function lol

// back to return closure
  }
// back to fi closure
})()
// is an immediately invoked function

fi.libraryMethod()
