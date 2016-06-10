/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-cartodb',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if (target.app) {
      target = target.app;
    }

    this.app = target;

    target.import('vendor/ember-leaflet-cartodb/cartodb_noleaflet.js');
    target.import('vendor/ember-leaflet-cartodb/cartodb.css');

    this._super.included.apply(this, arguments);
  }
};
