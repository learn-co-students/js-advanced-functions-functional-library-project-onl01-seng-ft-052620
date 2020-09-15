const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, newFunc){
      for(let el in arr){
        newFunc(arr[el])
      }
      return arr
    },

    map: function(arr, newFunc) {
      let newArr = []
      for (let el in arr){
        newArr.push(newFunc(arr[el]))
      }
      return newArr
    },

    reduce: function(arr, newFunc, total = 0) {
      if (!total){
        total = arr[0]
        arr = arr.slice(1);
      }
      for (let el in arr){
        total = newFunc(total, arr[el])
      }
      return total
    },

    find: function(arr, truthy) {
      let val
      for (let index in arr){
        if (truthy(arr[index])){
          return arr[index]
        }
      }
    },

    filter: function(arr, truthy){
      let newArr = []
      for (let index in arr){
        if(truthy(arr[index])){
          newArr.push(arr[index])
        }
      }
      return newArr
    },

    size: function(arr){
      return Object.keys(arr).length
    },

    first: function(arr, start = 0){
      if(!start){
        return arr[0]
      }else{
        return arr.splice(0, start)
      }
    },

    last: function(arr, start = 0){
      if(!start){
        return arr[arr.length-1]
      }
      else{
        for(let shift = arr.length-start; shift > 0; shift--){arr.shift()}
        return arr
      }
    },
  
    compact: function(arr){
      let newArr = []
      for (let index in arr){
        if (!!arr[index]){
          newArr.push(arr[index])
        }
      }
      return newArr
    },

    sortBy: function(arr, newFunc){
      let newArr = [...arr]
      return Object.assign(newArr.sort((a,b) => {return newFunc(a) - newFunc(b)}))
    },

    flatten: function(arr, one){
      if (one){
        return arr.flat()
      }
      let newArray = [...arr]
      let finalArray = []
      while(newArray.length > 0){
        let el = newArray.pop()
        if(Array.isArray(el)){
          newArray.push(...el)
        }else{
          finalArray.push(el)
        }
      }

      return finalArray.reverse()
    },

    uniq: function(arr, sorted = false, newFunc){
      let newArray = []

      let callbackReturn = [];


      for (let i= 0; i < arr.length; i++){
        const element = arr[i];
        if(!newArray.includes(element)){
          if(newFunc){
            let cn = newFunc(element);
            if(!callbackReturn.includes(cn)){
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
    
    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },

    functions: function(obj){
      let newArray = []

      for (let index in obj){
        if(typeof obj[index] === "function"){
          newArray.push(index)
        }
      }

      return newArray
    }

  }
})()

fi.libraryMethod()
