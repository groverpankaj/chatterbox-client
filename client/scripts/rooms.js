var Rooms = {

  roomsList: {},

  add: function() {
    $('#rooms button').on('click', function() {
      var newRoom = prompt('Please enter a name for your new room');
      if (newRoom !== null && /* implement XSS protection for this newRoom prompt */) {
        Rooms.roomsList[newRoom] = newRoom;
        RoomsView.renderRoom(newRoom);
      } else {
        alert('Error: Please enter a valid room name')
      }
    })
  },

  addExistingRooms: function(obj) {
    var m = obj.results;
    for (var i = 0; i < m.length; i++) {
      var rm = m[i].roomname;
      if (rm && !Rooms.roomsList.hasOwnProperty(rm)) {
        Rooms.roomsList[rm] = rm;
        RoomsView.renderRoom(rm);
      }
    }
  }

};