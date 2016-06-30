import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listing-admin-menu-comp', 'Integration | Component | listing admin menu comp', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listing-admin-menu-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listing-admin-menu-comp}}
      template block text
    {{/listing-admin-menu-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
