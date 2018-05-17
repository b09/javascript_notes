var setupConversation = function () {
    var conversationHistory = [];
    
    return function (newMessage) {
        conversationHistory.push(newMessage);

		conversationHistory.forEach(function (message) {
			console.log(message);
		});

		console.log("\n");
    }
}

var addMessage = setupConversation();

addMessage("I've got something very important to tell you that must never be forgotten");
addMessage("Oh yeah?");
addMessage("Oh no wait, it's fine.");
