import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            session: this.store.query('session', { status: 'Ожидается оплата'} ),
            employee: this.store.findAll('employee'),    
            point: this.store.findAll('point'),
        });
    }
});
