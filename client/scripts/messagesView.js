var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderAll: function(obj) {
    var m = obj.results;
    for (var i = 0; i < m.length; i++) {
      MessagesView.renderMessage(m[i]);
    }
    MessagesView.toggleFriend();
  },

  renderMessage: function(message) {
    if (message.username && message.roomname) {
      var m = MessageView.render(message);
      $('#chats').prepend(m);
      MessagesView.toggleFriend($('#chats').children()[0]);
    }

  },

  toggleFriend: function(m) {
    if (m !== undefined) {
      m.addEventListener('click', function(event) {
        event.preventDefault();
        Friends.toggleStatus(event.target.innerHTML);
      });
    }
  }

};

