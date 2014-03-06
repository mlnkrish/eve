(function (){
  var eve;

  var _eve = function(){

  }
  
  eve = new _eve();

  if (typeof define === 'function' && define.amd) {
    define('Eve', [], function() {
      return eve;
    });
  }
}).call(this)