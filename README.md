# kevinterrobang:discourse-api
This package adds the [Discourse](http://www.discourse.org) [NPM API library](https://github.com/dhyasama/discourse-api) to your Meteor application.

## Installation
Run `meteor add kevinterrobang:discourse-api` and configure the settings.json file accordingly:
```
{
  "public" : {
    "DISCOURSE" : {
      "URL" : "http://forum.yourdomain.com"
    }
  },
  "DISCOURSE" : {
    "API_KEY" : "your-generated-api-key-from-discourse",
    "API_USER" : "the-user-that-the-key-is-for"
  }
}
```