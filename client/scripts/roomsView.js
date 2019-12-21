var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },


  render: function() {
  },

  renderRoom: function(roomName) {
  	var room = `<option value="${roomName}">${roomName}</option>`;
  	$('#rooms select').append(room);
  }
};
