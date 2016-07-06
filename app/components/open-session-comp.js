import Ember from 'ember';

export default Ember.Component.extend({
    employeeGiveId: null,
    clientId: null,
    bicycleId: null,
    startPointId: null,
    
    isDataValid: Ember.computed('clientId', 'bicycleId', 'startPointId', 
        'employeeGiveId', function() {
            return this.get('clientId') && this.get('bicycleId') && 
            this.get('startPointId') && this.get('employeeGiveId');
    }),

    actions: {
        submit() {
        	this.get('submit')(this.get('employeeGiveId'), this.get('clientId'), 
            this.get('bicycleId'), this.get('startPointId'));
        },

        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        }
    }
});
