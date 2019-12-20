var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= message.username %></div>
        <div><%= message.text %></div>
      </div>
    `)

};