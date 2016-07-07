import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend ({
    keyForAttribute(attr) {
        return Ember.String.camelize(attr);
    }
});
