var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderAll: function(obj) {
    MessagesView.$chats.empty();
    var m = obj.results;
    var currentRoom = $('#allRooms').find(':selected').text();
    for (var i = 0; i < m.length; i++) {
      if (currentRoom === m[i].roomname || currentRoom === 'All messages') {
        MessagesView.renderMessage(m[i]);
      }
    }
    MessagesView.clickFriends();
  },

  renderMessage: function(message) {
    if (message.username && message.roomname && message.text) {
      var friendBool = Friends.friendList.hasOwnProperty(message.username);
      if (friendBool) {
        message['friendProperty'] = 'alert-danger';
      } else {
        message['friendProperty'] = 'alert-success';
      }
      var d = new Date(message.createdAt);
      var now = new Date();
      message['timeAgo'] = Math.floor((now - d)/60000) + ' minutes ago';

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

