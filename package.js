Package.describe({
  name: 'ntrrobng:discourse-api',
  version: '0.0.1',
  summary: 'Discourse API library for Meteor',
  git: 'https://github.com/ntrrobng/meteor-discourse-api.git'
});

Npm.depends({
  "discourse-api": "1.8.0"
});

Package.onUse(function (api) {

  api.addFiles('discourse-api.js');
  api.export('DiscourseAPI', 'server');

});