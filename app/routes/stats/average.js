import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            bicycle: this.store.findAll('bicycle'), 
            point: this.store.findAll('point')
        });
    },

    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('averageTime', -1);
        }
    }

});
