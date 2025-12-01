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

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
