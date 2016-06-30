import Ember from 'ember';

export default Ember.Component.extend({
    pointAddress: "",

    actions: {
        submit() {
            this.get('submit')(this.get('pointAddress'));
        }
    }

});
