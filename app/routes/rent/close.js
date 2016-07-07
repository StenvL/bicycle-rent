import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        statusChanged() {
            this.refresh();
        }
    }, 

    model() {
        return Ember.RSVP.hash({
            session: this.store.query('session', { status: 'Ожидается оплата'} ),
            employee: this.store.findAll('employee'),    
            point: this.store.findAll('point'),
        });
    }
});
