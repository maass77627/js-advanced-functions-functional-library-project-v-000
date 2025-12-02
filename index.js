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

last: function(collection, n) {
  if (n !== undefined) {
    return collection.slice(-n)
  } else {
    let num = collection.length -1
    return collection[num]
  }

  

},

compact: function(collection) {
 return collection.filter(Boolean)

  

},

sortBy: function(collection, cb) {
  
  const newArr = [...collection];

  return newArr.sort((a, b) => {
    const valA = cb(a);
    const valB = cb(b);

    
    if (typeof valA === "string" && typeof valB === "string") {
      return valA.localeCompare(valB);
    }

    return valA - valB;
  });
},

  

  flatten: function(collection, shallow = false, arr = []) {
  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];

    if (Array.isArray(value)) {
      if (shallow) {
        
        arr.push(...value);
      } else {
        
        this.flatten(value, false, arr);
      }
    } else {
      arr.push(value);
    }
  }

  return arr;
},

  uniq: function(array, isSorted = false, iteratee = false) {
  const result = [];
  const seen = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const computed = iteratee ? iteratee(value) : value;
    if (isSorted) {
      if (i === 0 || computed !== seen[seen.length - 1]) {
        seen.push(computed);
        result.push(value);
      }
    } 
    else {
      if (!seen.includes(computed)) {
        seen.push(computed);
        result.push(value);
      }
    }
  }

  return result;
},

  keys: function(collection) {
 return Object.keys(collection)

  },

  values: function(collection) {
  return Object.values(collection)

  },

functions: function(obj) {
  const functionNames = [];

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      functionNames.push(key);
    }
  }

  return functionNames.sort();

    },


  }
})()

fi.libraryMethod()
