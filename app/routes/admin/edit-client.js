import Ember from 'ember';

export default Ember.Route.extend({
    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('filteredClients', []);
            controller.set('client', null);
        }
    }
});
