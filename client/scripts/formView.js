var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#rooms button').on('click', FormView.handleAddRoom);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var currentRoom = $('#allRooms').find(':selected').text();
    var currentUser = App.username;
    var currentMessage = $('#message').val();

    var messageObject = {'roomname': currentRoom, 'username': currentUser, 'text': currentMessage};

    if (currentRoom === 'All messages') {
      alert('Select a room to post in');
    } else {
      Parse.create(messageObject);
      App.fetch(App.stopSpinner);
      $('#message').val('');
    }


  },

  handleAddRoom: function(event) {
    event.preventDefault();
    Rooms.add();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};