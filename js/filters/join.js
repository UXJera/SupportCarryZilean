sczApp.filter('join', function() {
  return function(string) {
    return string.join(" ");
  }
});

// http://stackoverflow.com/questions/20506360/angular-repeat-span-n-times

sczApp.filter('range', function() {
  return function(val, range) {
     range = parseInt(range);
     for (var i=0; i<range; i++)
       val.push(i);
     return val;
   };
});
