import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

const { run, observer } = Ember;

export default BaseLayer.extend({
  leafletRequiredOptions: [
    'url'
  ],

  leafletOptions: [
    'zIndex', 'opacity'
  ],

  leafletEvents: [
  ],

  leafletProperties: [
    'url', 'zIndex', 'opacity'
  ],

  didInsertParent() {
    this._layer = this.createLayer();
    this._addObservers();
    this._addEventListeners();

    let map = this.get('parentComponent._layer');

    if (map) {
      let zIndex = this.get('options.zIndex');

      this._layer.on('done', (layer) => {
        // leaflet 1.0 hack, remove once cartodb.js supports leaflet 1.0
        layer._adjustTilePoint = () => {};

        cdb.geo.LeafletMapView.addLayerToMap(layer, map, zIndex);
        this.layer = layer;
        this.didCreateLayer();

        if (this.get('sql')) {
          this.setSql();
        }

        if (this.get('onClick')) {
          layer.getSubLayers().forEach((subLayer) => {
            cdb.vis.Vis.addCursorInteraction(map, subLayer);
            subLayer.setInteraction(true);
            subLayer.on('featureClick', run.bind(this, (...args) => {
              this.get('onClick')(...args);
            }));
          });
        }
      });
    }
  },

  setSql: observer('sql', function() {
    let SQL = this.get('sql');
    this.layer.getSubLayer(0).setSQL(SQL);
  }),

  willDestroyParent() {
    this.willDestroyLayer();
    this._removeEventListeners();
    this._removeObservers();

    let map = this.get('parentComponent._layer');

    if (map && this._layer && this.get('layer')) {
      map.removeLayer(this.get('layer'));
    }

    this._layer = null;
    this.layer = undefined;
  },

  createLayer() {
    let map = this.get('parentComponent._layer');
    let url = this.get('url');
    let options = this.getProperties('legends');

    return cartodb.createLayer(map, url, options);
  }
});
