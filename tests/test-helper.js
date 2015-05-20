/* globals QUnit */
import Ember from 'ember';
import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

Ember.Test.registerAsyncHelper('clickLink',
  function(app, linkText) {
    click(`a:contains(${linkText})`);
  }
);

Ember.Test.registerHelper('exists',
  function(app, selector) {
    QUnit.ok(find(selector).length >= 1);
  }
);
