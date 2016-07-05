import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            bicycle: this.store.findAll('bicycle'),
            employee: this.store.findAll('employee'),
            point: this.store.findAll('point')
        });    
    },

    resetController(controller, isExiting, transition) {
        if (isExiting) {
            controller.set('sessionList', []);
            controller.set('filteredClients', []);
            controller.set('session', null);
        }
    }
});
