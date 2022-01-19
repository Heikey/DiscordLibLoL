const WebSocketRequests = require('./WebSocketRequests');
const RestApi = require('./RestApi');
const Intents = require('./Intents');
class Client {
    constructor(token='',intents = Intents.ALL) {
        this.ws = new WebSocketRequests(token,intents);
        this.rest = new RestApi(token)
        //this.user
    }
}
module.exports = Client;