import Ember from 'ember';

export default Ember.Component.extend({
    employeeGiveId: null,
    clientId: null,
    bicycleId: null,
    startPointId: null,
    
    isDataValid: Ember.computed('clientId', 'bicycleId', 'startPointId', function() {
        return this.get('clientId') && this.get('bicycleId') && this.get('startPointId');
    }),

    actions: {
        submit() {
            if (this.get('employeeGiveId') && this.get('clientId')  && 
                this.get('bicycleId') && this.get('startPointId')) {
                    
                this.get('submit')(this.get('employeeGiveId'), this.get('clientId'), 
                    this.get('bicycleId'), this.get('startPointId'));
            }
            else { alert("Необходимо заполнить все данные"); }
        },

        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        }
    }
});
