import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import CartodbLayerComponent from 'ember-leaflet-cartodb/components/cartodb-layer';

var layer;

moduleForComponent('cartodb-layer', 'Integration | Component | cartodb layer', {
  integration: true,
  beforeEach() {
    this.register('component:cartodb-layer', CartodbLayerComponent.extend({
      init() {
        this._super(...arguments);
        layer = this;
      }
    }));
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.setProperties({
    lat: 42.33012354634199,
    lng: -70.95623016357422,
    zoom: 4,
    cartoUrl: 'http://nacis-workshop.cartodb.com/api/v2/viz/569d1940-336d-11e3-af98-5f54611e93d5/viz.json'
  });

  this.render(hbs`
    {{#leaflet-map lat=lat lng=lng zoom=zoom}}
      {{cartodb-layer url=cartoUrl}}
    {{/leaflet-map}}
  `);

  assert.ok(layer._layer, 'has layer object defined');
});
