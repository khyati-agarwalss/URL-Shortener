# URL-Shortener

Slash commands are special messages that begin with a slash (/) and behave differently from regular chat messages. There are many slash commands available by default, and we can also create our own custom ones to trigger special actions or to retrieve information from external sources without leaving Slack.

"URL shortener" slash command will allow us to generate personalised short urls with a versatile syntax. I have used Rebrandly as a Short URL service. I have also passed a sample request bin URL as Request URL in order to inspect the payload that gets sent by Slack before implementing the custom logic.

## How does the application works?

Our goal is to implement a little web server app that receives url shortening commands, calls the rebrandly APIs to do so and returns the shortened URLs back to the Slack server. We can break down our app into some well-defined components:

1. The **web server** deals with all the HTTP nuances, receives and decodes requests from the Slack server and forwards it to the underlying components. Collects the result from them and returns it as an HTTP response.

2. The **command parser** parses the text (arguments) of the slash commands and extracts URLS, slashtags and domains.

3. The **url shortener** uses the result of the command parser to generate the short URLs by invoking the Rebrandly APIs.

## Steps to run the code

**Step 1**: Clone the code

**Step 2**: Replace slackToken and Rebrandly API key in server.js

**Step 3**: Type `ngrok http 3000` in the terminal *(Make sure you have already installed and configured `ngrok` on your system)*

**Step 4**: Move to your slack channel and type the command *(Don't forget to mention URL(s), domain and slashtag(s))*

![alt text](https://github.com/khyati-agarwalss/URL-Shortener/blob/master/demo.gif)
Thanks to [Luciano Mammino](https://scotch.io/@loige), whose amazing [tutorial](https://scotch.io/tutorials/create-a-custom-slack-slash-command-with-nodejs-and-express) helped me build this integration.
