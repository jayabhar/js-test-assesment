exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      // check for an item in the array and return it's location else return -1
      for(var i = 0; i < arr.length; i++){
        if(arr[i] == item)
          return i;
      }
      return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
      }
    return sum;
  },

  remove : function(arr, item) {
        for(var i = arr.length - 1; i >= 0; i--) {
          if(arr[i] === item) {
             arr.splice(i, 1);
          }
        }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
      for(var i = arr.length - 1; i >= 0; i--) {
          if(arr[i] === item) {
             arr.splice(i, 1);
          }
        }
    return arr;
  },

  append : function(arr, item) {
     arr.push(item);
     return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
      arr.splice(0, 1);
    return arr;

  },

  concat : function(arr1, arr2) {
    var newarr = arr1.concat(arr2);
    return newarr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
       for (var i = 0; i < arr.length; i++) {
          if (item == arr[i]) {
              count++;
          }
      }
    return count;
  },

  duplicates : function(arr) {
      var cache = {};
      var results = [];
      for (var i = 0; i < arr.length; i++) {
        if(cache[arr[i]] === true){
            results.push(arr[i]);
         }else{
             cache[arr[i]] = true;
         }

      }
    return results;
  },

  square : function(arr) {
    var result = [];
       for (var i = 0; i < arr.length; i++) {
          result.push(arr[i] * arr[i]);
      }
    return result;
  },

  findAllOccurrences : function(arr, target) {
      var result = [];
       for (var i = 0; i < arr.length; i++) {
          if(target == arr[i])
              result.push(i);
      }
    return result;
  }
};
