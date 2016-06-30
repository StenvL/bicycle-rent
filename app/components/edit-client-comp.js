import Ember from 'ember';

export default Ember.Component.extend({
    client: null,

    isDataValid: Ember.computed('client.fullName', 'client.documentData', function() {
        return this.get('client').get('fullName') && this.get('client').get('documentData');
    }),

    actions: {      
        submit() {
            this.get('submit')(this.get('clientId'), this.get('clientName'), this.get('clientDoc'))
        }
    }
});
