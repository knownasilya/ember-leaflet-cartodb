import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cartodb-layer', 'Integration | Component | cartodb layer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cartodb-layer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cartodb-layer}}
      template block text
    {{/cartodb-layer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
