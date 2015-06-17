var wobot = require('wobot');
var poll = {};

var hippyBot = new wobot.Bot({
	jid: '',
	password: ''
});

hippyBot.connect();

hippyBot.onConnect(function() {
	console.log('Connected!');
});

hippyBot.onInvite(function(room) {
	hippyBot.join(room);
});

hippyBot.onMessage(/.*/, function(chan, from, message) {
	if (message.substr(0, 5) === '!poll') {
		message = message.substr(6);
		hippyBot.message(chan, from + ' has started a poll! Respond with one of the following: ' + message);

		poll[chan] = {}

		var options = message.split(', ');
		for (var i = 0; i < options.length; i++) {
			poll[chan][options[i]] = 0;
		}
	} else if (message === '!results') {
		if (poll[chan] !== undefined) {
			hippyBot.message(chan, 'Poll has been stopped! Results:');

			var keys =  Object.keys(poll[chan]);

			for (var i = 0; i < keys.length; i++) {
				hippyBot.message(chan, keys[i] + ': ' + poll[chan][keys[i]]);
			}

			delete poll[chan];
		} else {
			hippyBot.message(chan, 'No poll was active.');
		}
	} else {
		if (poll[chan] !== undefined) {
			if (poll[chan][message] !== undefined) {
				poll[chan][message]++;
			}
		}
	}
});