(function (){
  var eve;

  var _eve = function(){
    var events = {};

    var self = this;
    var binder = function(subscriptions){
      var self = this;
      var subscriptions = subscriptions;
      self.do = function(fn){
        subscriptions.add(fn);
      }
    }

    var publisher = function(args){
      var self = this;

      self.publish = function(event_name){
        if(!!events[event_name]){
          events[event_name].fireAll(args);
        }
      }
    }

    var subscriptions = function(){
      var self = this;
      var subs = [];

      self.add = function(fn){
        subs.push(fn);
      }

      self.fireAll = function(args){
        for(var i=0 ; i< subs.length; i++){
          subs[i].apply(this,args);
        }
      }
    }


    self.on = function(event_name){
      if(!!!events[event_name]){
        events[event_name] = new subscriptions();
      }
      return new binder(events[event_name]);
    }

    self.publish = function(event_name){
      if(!!events[event_name]){
        events[event_name].fireAll();
      }
    }

    self.with = function(){
      return new publisher(arguments);
    }

    self.clear = function(){
      events = {};
    }
  }
  
  eve = new _eve();

  if (typeof define === 'function' && define.amd) {
    define('Eve', [], function() {
      return eve;
    });
  }
}).call(this)