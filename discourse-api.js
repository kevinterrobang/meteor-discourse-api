DiscourseAPI = function() {
  if (!this._api) {
    var D = Npm.require('discourse-api');
    this._api = new D(Meteor.settings.public.DISCOURSE.URL,
                      Meteor.settings.DISCOURSE.API_KEY,
                      Meteor.settings.DISCOURSE.API_USER);
  }
  return this._api;
};