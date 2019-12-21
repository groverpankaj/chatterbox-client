var Friends = {

	friendList: {},

	toggleStatus: function(userName) {
		var user = userName.trim();
		if (!Friends.friendList.hasOwnProperty(user)) {
			Friends.friendList[user] = user;
		}
	}

};