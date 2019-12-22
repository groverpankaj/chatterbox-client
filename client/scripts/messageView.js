var MessageView = {

  render: _.template(`
      <div class="chat <%- friendProperty %> row" >
        <div class="username col-6" ><%- username %></div>
        <div class='time-stamp col-6 text-right font-italic'><%- timeAgo %></div>
        <div class='col-12'><%- text %></div>
        <div class='col-12'><%- roomname %></div>
      </div>
    `)
};