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
      // let newCollection = collection.map((item, index) => cb(item, index, collection))
      // return newCollection

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
