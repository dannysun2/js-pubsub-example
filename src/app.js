var people = (function(){
  var btn = $('.btn');
  var peopleCount = 0

  btn.on('click', incrementCount );

  // does not touch header.js at all, only tells events that its updated.
  function incrementCount() {
    peopleCount += 1;
    events.emit('increasePeople', peopleCount);
  }
})();
