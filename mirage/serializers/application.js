import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend ({
    keyForAttribute(attr) {
        return Ember.String.camelize(attr);
    }
});