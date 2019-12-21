var MessageView = {

  render: _.template(`
      <div class="chat <%- friendProperty %>" >
        <div class="username" ><%- username %></div>
        <div><%- text %></div>
        <div><%- roomname %></div>
      </div>
    `)
};