import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            employee: this.store.findAll('employee'), 
            client: this.store.findAll('client'),
            bicycle: this.store.findAll('bicycle'),
            point: this.store.findAll('point')
        });
    },

    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('clientId', null);
            controller.set('filteredClients', []);
        }
    }
});
