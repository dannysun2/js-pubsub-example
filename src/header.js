var header = (function(){
  // registers listener
  events.on('increasePeople', updatePeople);

  // does not directly interact with app.js
  function updatePeople(count){
    console.log(count);
  }

})();
