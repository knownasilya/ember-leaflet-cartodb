import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

const { observer } = Ember;

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

  layerSetup() {
    this._layer = this.createLayer();
    this._addObservers();
    this._addEventListeners();
    if (this.get('containerLayer')) {
      let map = this.get('containerLayer')._layer;
      let zIndex = this.get('options.zIndex');

      this._layer.on('done', (layer) => {
        cdb.geo.LeafletMapView.addLayerToMap(layer, map, zIndex);
        this.layer = layer;
        this.didCreateLayer();
        if(this.get('sql')) {
          this.setSql();
        }
      });
    }
  },

  setSql: observer('sql', function() {
    let SQL = this.get('sql');
    this.layer.getSubLayer(0).setSQL(SQL);
  }),

  layerTeardown() {
    this.willDestroyLayer();
    this._removeEventListeners();
    this._removeObservers();
    if (this.get('containerLayer') && this._layer && this.get('layer')) {
      this.get('containerLayer')._layer.removeLayer(this.get('layer'));
    }
    this._layer = null;
    this.layer = undefined;
  },

  createLayer() {
    let map = this.get('containerLayer._layer');
    let requiredOptions = this.get('requiredOptions');
    let legends = this.getProperties('legends');

    return cartodb.createLayer(map, ...requiredOptions, legends);
  }
});
