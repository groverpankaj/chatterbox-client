var Rooms = {

  roomsList: {},

  add: function() {

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