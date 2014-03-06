define(["Eve"],function($E){
  
  describe("Event bus", function() {
    
    it("should publish events to the subscribers", function(done) {
      var fn1 = false; var fn2 = false;
      $E.on('landed-on-moon').do(function(){
        fn1 = true;
        if(fn2&&fn1)
          done();
      }) 

      $E.on('landed-on-moon').do(function(){
        fn2 = true;
        if(fn2&&fn1)
          done();
      }) 

      $E.publish('landed-on-moon');
    }); 
    
    it("should publish events to the subscribers with data", function(done) {
      var fn1 = false; 
      var fn2 = false;
      
      $E.on('landed-on-moon').do(function(a){
        expect(a).toBe("armstrong");
        fn1 = true;
        if(fn2&&fn1)
          done();
      }); 

      $E.on('landed-on-moon').do(function(a,b){
        expect(a).toBe("armstrong");
        expect(b).toBe("aldrin");
        fn2 = true;
        if(fn2&&fn1)
          done();
      }); 

      $E.with("armstrong","aldrin").publish('landed-on-moon');
    });

    afterEach(function() {
      $E.clear();
    }); 

  });

})
