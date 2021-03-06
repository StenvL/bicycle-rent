import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('del-bicycle-comp', 'Integration | Component | del bicycle comp', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{del-bicycle-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#del-bicycle-comp}}
      template block text
    {{/del-bicycle-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
