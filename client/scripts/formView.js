var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var currentRoom = $('#allRooms').find(':selected').text();
    var currentUser = App.username;
    var currentMessage = $('#message').val();

    var messageObject = {'roomname': currentRoom, 'username': currentUser, 'text': currentMessage};

    Parse.create(messageObject);
    App.fetch
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};