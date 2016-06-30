import Ember from 'ember';

export default Ember.Component.extend({
    session: null,

    actions: {
        submit() {
            this.get('submit')();
        }
    }
});
