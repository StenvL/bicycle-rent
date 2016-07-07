import Ember from 'ember';

export default Ember.Component.extend({
    sessionId: null,
    empId: null,
    pointId: null,
    isDataValid: Ember.computed('sessionId', 'empId', 'pointId', function() { 
    	return this.get('sessionId') && this.get('empId') && this.get('pointId');
    }),

    actions: {
        submit() {
            this.get('submit')(this.get('sessionId'), this.get('empId'), this.get('pointId'));
        },

        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        }
    }
});
