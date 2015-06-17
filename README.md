# HippyBot
A Hipchat bot for polls. (Accepting feature requests). Uses [cjoudrey/wobot](https://github.com/cjoudrey/wobot/)

## To Use:
Open HippyBot.js

Change the block of:
```
var hippyBot = new wobot.Bot({
	jid: '',
	password: ''
});
```
To your jabber ID and your Password for the account in Hipchat.
Then just invite the bot and use the commands below.


# Commands
### Poll System
| Command   | Description                                          | Example                     |
| --------- | ---------------------------------------------------- | --------------------------- |
| !poll ... | This will start the poll with comma seperated values | !poll Apple, Banana, Orange |
| !results  | This will stop the poll and message the results      | !results                    |

