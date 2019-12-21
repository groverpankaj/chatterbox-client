var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderAll: function(obj) {
    MessagesView.$chats.empty();
    var m = obj.results;
    for (var i = 0; i < m.length; i++) {
      MessagesView.renderMessage(m[i]);
    }
    MessagesView.clickFriends();
  },

  renderMessage: function(message) {
    if (message.username && message.roomname && message.text) {
      var friendBool = Friends.friendList.hasOwnProperty(message.username);
      if (friendBool) {
        message['friendProperty'] = 'friend';
      } else {
        message['friendProperty'] = '';
      }
      var m = MessageView.render(message);
      $('#chats').append(m);

    }

  },

  clickFriends: function() {
    $('div.username').on('click', function(event) {
      Friends.toggleStatus(event.target.innerHTML)
    });
  }

};

