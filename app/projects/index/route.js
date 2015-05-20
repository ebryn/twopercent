import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON("/api/bb_projects/projects/");
  }
});
