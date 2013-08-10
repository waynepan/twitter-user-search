(function() {
  var oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://api.twitter.com/oauth/request_token',
    'authorize_url': 'https://api.twitter.com/oauth/authorize',
    'access_url': 'https://api.twitter.com/oauth/access_token',
    'consumer_key': 'jd7RciPde9wPfzYcxEg',
    'consumer_secret': 'HSOgKgTuq44vAtsGY1v9XbRmu7YLs1Pf0ADNWfP0KA'
  });

  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('clicked');
    oauth.authorize(function() {
       console.log("authorized");
    });
  });
})();