require.config({
  baseUrl: ".."
});

require(["tests/eve-test"],
  function(){
    jasmine.runTests();
  });
