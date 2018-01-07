# TwitterBot
Twitter Bot built using JavaScript and node.js runetime environment. Communicating and authenticating to the twitter API to carry out GET, POST and STREAM requests.

Demonstrating how to connect and authenticate to the Twitter API from the terminal/command line to post to Twitter, to search Twitter, to look for users to reply to in Twitter.

Built using Visual Studio Code and UNIX commands in the Cmder terminal emulator.

Use "npm init" command to create package.json file which acts as the settings/configuration file.

Using Twit package API client for node on NPM. This supports REST and Streaming.
Use npm install twit --save

In package.json file add to the scripts:

"scripts": {
    

	"start": "node bot.js",

    	"test": "echo \"Error: no test specified\" && exit 1"
  
}

This will ensure that if "npm start" is typed into the terminal it is the equivalent to "node bot.js"

Go to https://apps.twitter.com/

Using SetInterval JavaScript function to post to twitter a random number at specific time intervals. 

Have the bot respond to a user who begins to follow you with a specific response.
Create a new API
Get Keys and Access Tokens

The types of commands that the Twit package may be used include:

get() where we search by hashtag, location, user etc

post() i.e. tweeting, statuses or updates

stream() certain events may be triggered by a stream. Events may be triggered by a user liking my tweet, following me, retweeting me, posting with a certain hashtag.
