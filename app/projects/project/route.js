import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`/api/bb_projects/projects/${params.projectId}`);
  }
});
