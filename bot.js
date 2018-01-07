console.log("The (follow) bot is starting");

//import the package
var Twit = require('twit');

//require contents of the config.js file
var config = require('./config')

var T = new Twit(config);

//setting up a user stream
var stream = T.stream('user');

//Anytime someone follows, setting a callback 'follow' 
stream.on('follow', followed);

function followed(eventMsg) {
    console.log("Follow event!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('.@' + screenName + ' thank you for following me!');
};

//GET request

var params = { 
  q: 'flower', 
  count: 2
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
    } 
};

// POST request

tweetIt();
//setInterval(tweetIt, 1000*20);

function tweetIt(txt){

    var r = Math.floor(Math.random()*100);

    var tweet = {
        //status: 'Here is a random number: ' + r + ' #codingrainbow from node.js'
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err){
            console.log("Something went wrong!")
        } else {
            console.log("It worked");
            //console.log(data);
        }
    }
};
