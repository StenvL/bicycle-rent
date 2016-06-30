import Ember from 'ember';

export default Ember.Component.extend({
    clientId: null,

    actions: {
        submit() {
            this.get('submit')(this.get('clientId'));
        }
    }
});
