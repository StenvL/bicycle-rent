import Ember from 'ember';

export default Ember.Component.extend({
    clientName: "",
    docType: "",
    docData: "",
    isDataValid: Ember.computed('clientName', 'docType', 'docData', function() {
        return this.get('clientName') && this.get('docType') && this.get('docData');
    }),

    actions: {
        submit() {
            this.get('submit')(this.get('clientName'), this.get('docType') + " " + this.get('docData'));
        }
    }
});
