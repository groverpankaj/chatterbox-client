var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessages: function(message) {
  	var m = MessageView.render(message);
  	$('#chats').prepend(m);
  }

};