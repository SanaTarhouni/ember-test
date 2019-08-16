import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | projects', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('projects');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('projects', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
