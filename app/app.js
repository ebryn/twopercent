import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import fakeServer from './pretender';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver
});

if (true) {
  let server = new Pretender(fakeServer);
}

loadInitializers(App, config.modulePrefix);

export default App;
