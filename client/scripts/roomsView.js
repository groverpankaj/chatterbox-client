var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.renderRoom('All messages');
    RoomsView.$select.on('change', function() {
      App.fetch(App.stopSpinner);
    });
  },


  render: function() {
  },

  renderRoom: function(roomName) {
  	var room = `<option value="${roomName}">${roomName}</option>`;
  	$('#rooms select').append(room);
  }
};
