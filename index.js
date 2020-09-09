const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const x in collection){
        callback(collection[x],x,collection)
      }

      return collection
    },

    map: function(collection,callback) {
      let res = []

      for (const x in collection){
        res.push(callback(collection[x],x,collection))
      }

      return res
    },

    reduce: function(collection,callback,acc) {
      let res = acc || collection[0]

      let i = acc ? 0 : 1

      for (;i<collection.length;i++){
        res = callback(res,collection[i],collection)
      }

      return res
    },

    find: function(collection, predicate) {
      for (const x in collection){
        if (predicate(collection[x])){
          return collection[x]
        }
      }
      
      return undefined
    },

    filter: function(collection,predicate){
      let res = []

      for (const x in collection){
        if (predicate(collection[x])){
          res.push(collection[x])
        }
      }
      return res
    },

    size: function(collection){
      let count = 0
      for (const x in collection){
        count++
      }

      return count
    },

    first: function(array,n){
      if (n){
        let res = []

        for (const x in array){
          if (x < n){
            res.push(array[x])
          }
        }

        return res
      } else {
        return array[0]
      }
    },

    last: function(array, n){
      if (n){
        let res = []

        for (let i = Math.max(array.length-n,0); i < array.length; i++){
          res.push(array[i])
        }

        return res
      } else {
        return array[array.length-1]
      }
    },

    compact: function(array){
      let res = []

      for (const x in array){
        if (array[x]){
          res.push(array[x])
        }
      }

      return res
    },

    sortBy: function(array,callback){
      
      const swap = (arr,i,j) => {
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }

      const partition = (arr,left,right) => {
        let pivot = Math.floor((left + right)/2)

        while (left <= right){
          while(callback(arr[left]) < callback(arr[pivot])){
            left++
          }
          while(callback(arr[right]) > callback(arr[pivot])){
            right--
          }

          if(left <= right){
            swap(arr,left,right)
            left++
            right--
          }
        }

        return left
      }

      const quicksort = (arr,left,right) => {
        left = left || 0
        right = right || arr.length-1

        let pivot = partition(arr,left,right)

        if(left < pivot-1){
          quicksort(arr,left,pivot-1)
        }
        if(right > pivot){
          quicksort(arr,pivot,right)
        }

        return arr
      }

      let copy = Object.assign([],array)
      return quicksort(copy)
    },

    flatten: function(array, shallow){
      
      const shallow_flatten = (array) => {
        let res = []

        for (const x in array){
          if (Array.isArray(array[x])){
            res = res.concat(array[x])
          } else {
            res.push(array[x])
          }
        }

        return res
      }

      const full_flatten = array => {
        let res = []

        for (const x in array){
          if (Array.isArray(array[x])){
            res = res.concat(full_flatten(array[x]))
          } else {
            res.push(array[x])
          }
        }

        return res
      }

      if (shallow){
        return shallow_flatten(array)
      } else{
        return full_flatten(array)
      }

    },

    uniq: function(array, isSorted, callback){
      let set = []
      callback = callback || (x => x)

      if (!isSorted){
        const includes = function(e,callback){
          for (const x in this){
            if(callback(this[x])===callback(e)){
              return true
            }
          }
          return false
        }

        for (const x in array){
          if (!includes.call(set,array[x],callback)){
            set.push(array[x])
          }
        }
      } else{
        for (let i = 0; i < array.length; i++){
          set.push(array[i])

          while(callback(array[i])===callback(array[i+1])){
            i++
          }
        }
      }

      return set
    },

    keys: function(object){
      let res = []
      for (const x in object){
        res.push(x)
      }

      return res
    },

    values: function(object){
      let res = []
      for (const x in object){
        res.push(object[x])
      }
      return res
    },

    functions: function(object){
      let res = []

      for(const x in object){
        if(typeof object[x] === 'function'){
          res.push(x)
        }
      }
      return res.sort()
    }

  }
})()

fi.libraryMethod()