# URL-Shortener

Slash commands are special messages that begin with a slash (/) and behave differently from regular chat messages. There are many slash commands available by default, and we can also create our own custom ones to trigger special actions or to retrieve information from external sources without leaving Slack.

"URL shortener" slash command will allow us to generate personalised short urls with a versatile syntax. I have used Rebrandly as a Short URL service. I have also passed a sample request bin URL as Request URL in order to inspect the payload that gets sent by Slack before implementing the custom logic.

## Steps to run the code

Step 1: Clone the code.

Step 2: Replace slackToken and Rebrandly API key.

Step 3: Type "npm start" in the terminal.

Step 4: Move to your slack channel and type the command.

![alt text](https://github.com/khyati-agarwalss/URL-Shortener/blob/master/demo.gif)
Thanks to [Luciano Mammino](https://scotch.io/@loige), whose amazing [tutorial](https://scotch.io/tutorials/create-a-custom-slack-slash-command-with-nodejs-and-express) helped me build this integration.
