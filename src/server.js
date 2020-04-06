const Express = require('express');
const bodyParser = require('body-parser');
const createShortUrlsFactory = require('./createShortUrls');
const slashCommandFactory = require('./slashCommand');

const app = new Express();
app.use(bodyParser.urlencoded({extended: true}));

const slackToken = 'fJZKUWNn57dT2RsUbVmaPARr';
const apiKey = 'e00bebfaf01c4f099ab0fe924a4d0c78';

if(!slackToken || !apiKey) {
    console.error('missing environment variables SLACK_TOKEN and/or REBRANDLY_APIKEY');
    process.exit(1);
}

const hostname = 'localhost';
const port = 3000;

const rebrandlyClient = createShortUrlsFactory(apiKey);
const slashCommand = slashCommandFactory(rebrandlyClient, slackToken);

app.post('/', (req, res) => {
    slashCommand(req.body)
    .then((result) => {
        return res.json(result);
    })
    .catch(console.error);
});

app.listen( port, () => {
    console.log (`Server running at http://${hostname}:${port}`);
});