const { default: axios } = require("axios");

class RestApi {
    constructor(token = '') {
        this.token = token;
        this.baseUrl = 'https://discordapp.com/api/v9';
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${this.token}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
        }
        let instance = axios.create({
            baseURL: this.baseUrl,
            headers: this.headers,
                        
        })
    }
}

module.exports = RestApi;