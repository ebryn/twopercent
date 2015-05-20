import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'twopercent/tests/helpers/start-app';
import Pretender from 'pretender';

var application;

function jsonResponse(json, status = 200) {
  return [status, {'Content-Type': 'application/json'}, JSON.stringify(json)];
}

let server;

module('Acceptance | projects', {
  beforeEach: function() {
    application = startApp();

    server = new Pretender(function() {
      this.get('/api/bb_projects/projects/', request => {
        let json = {results: [{id: 'my-fake-project', title: 'my fake project'}]};
        return jsonResponse(json);
      });

      this.get('/api/bb_projects/projects/:projectId', request => {
        let json = {id: 'my-fake-project', title: 'my fake project'};
        return jsonResponse(json);
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting the projects page', function(assert) {
  visit('/');
  clickLink('Projects');

  andThen(function() {
    exists('h1:contains(Project)');
  });

  clickLink('my fake project');
});


test('visiting /projects', function(assert) {
  visit('/projects');

  andThen(function() {
    exists('h1:contains(Project)');
  });
});
