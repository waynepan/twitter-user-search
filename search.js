(function() {
  var name_regex = /@[a-z0-9_]{2,15}$/;
  $('input, textarea').on('input', function(e) {
    if(e.currentTarget.value.match(name_regex)) {
      var q = e.currentTarget.value.match(name_regex)[0];
      console.log("query: " + q);
    }
  });
})();