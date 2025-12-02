const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        collection.forEach((item, index) => cb(item, index, collection))
      }
      else {
        for (let key in collection) {
          cb(collection[key], key, collection)
        }
      }
      return collection

    },

    map: function(collection, cb) {
      let newCollection = []
      if (Array.isArray(collection)) {
        newCollection = collection.map((item, index) => cb(item, index, collection))

      } else {
        let array = Object.values(collection)
        newCollection = array.map((item, index) => cb(item, index, collection))

      }
      return newCollection
      

    },


    reduce: function(collection, cb, acc) {

  if (Array.isArray(collection)) {

   
    if (acc === undefined) {
      acc = collection[0];
      collection = collection.slice(1);
    }

    let total = collection.reduce((acc, item) => {
      return cb(acc, item, collection);
    }, acc);

    return total;

  } else {

    let array = Object.values(collection);

    
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }

    let total = array.reduce((acc, item) => {
      return cb(acc, item, collection);
    }, acc);

    return total;
  }
},

find: function(collection, predicate) {
  if  (Array.isArray(collection)) {
   let answer = collection.find((item) => predicate(item))
   return answer
  } else {
    let array = Object.values(collection)
    let answer = array.find((item) => predicate(item))
    return answer
  }

},

filter: function(collection, cb) {
  if  (Array.isArray(collection)) {
  let answer = collection.filter((item) => cb(item) === true)
  return answer
  } else {
    let array = Object.values(collection)
    let answer = array.filter((item) => cb(item) === true)
    return answer
    
  }


},

size: function(collection) {
  if  (Array.isArray(collection)) {
  return collection.length
  } else {
    let array = Object.keys(collection)
    return array.length
    
  }

  

},

first: function(collection, n) {
  if  (Array.isArray(collection)) {
    if (n !== undefined) {
      return collection.slice(0, n)
    } else {
      return collection[0]
    }
  
  } else {
    let array = Object.values(collection)
    if (n !== undefined) {
      return array.slice(0, n)
    } else {
      return array[0]
    }
   
    
  }

  },

last: function(collection) {
  if  (Array.isArray(collection)) {
  return collection.length
  } else {
    let array = Object.keys(collection)
    return array.length
    
  }

  

},

compact: function(collection) {
  if  (Array.isArray(collection)) {
  return collection.length
  } else {
    let array = Object.keys(collection)
    return array.length
    
  }

  

},

sortBy: function(collection) {
  if  (Array.isArray(collection)) {
  
  } else {
    let array = Object.keys(collection)
   
    
  }

  },

  flatten: function(collection) {
  if  (Array.isArray(collection)) {
  
  } else {
    let array = Object.keys(collection)
   
    
  }

  },

  uniq: function(collection) {
  if  (Array.isArray(collection)) {
  
  } else {
    let array = Object.keys(collection)
   
    
  }

  },

  keys: function(collection) {
  if  (Array.isArray(collection)) {
  
  } else {
    let array = Object.keys(collection)
   
    
  }

  },

  values: function(collection) {
  if  (Array.isArray(collection)) {
  
  } else {
    let array = Object.keys(collection)
   
    
  }

  },

functions: function() {

    },


  }
})()

fi.libraryMethod()
