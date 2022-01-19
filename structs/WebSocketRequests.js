const ws = require('ws');
const { ALL } = require('./Intents');
class WebSocketRequests {
    constructor(token = '',intents = ALL) {
        this.token = token;
        this.ws = new ws('wss://gateway.discord.gg/?v=9&encoding=json');
        this.ws.on('error', (err) => {
            console.log(err);
        })
        this.ws.on('open', () => {
            this.ws.send(JSON.stringify({
                op: 2,
                d: {
                    token: this.token,
                    intents: intents || ALL,
                    properties: {
                        "$os": "linux",
                        "$browser": "lol",
                        "$device": "lol",
                    },
                }
            }))
        })
        this.ws.on('message', (data) => {
            console.log(JSON.parse(data))
        })
        this.ws.on("close", (code, reason) => {
            console.log(code);
        })

    }
}

module.exports = WebSocketRequests;