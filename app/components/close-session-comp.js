import Ember from 'ember';

export default Ember.Component.extend({
    sessionId: null,
    empId: null,
    pointId: null,
    isDataValid: Ember.computed('sessionId', 'empId', 'pointId', function() { 
    	return this.get('sessionId') && this.get('empId') && this.get('pointId');
    }),

    getListValue(listId) {
    	var index = document.getElementById(listId).selectedIndex;
        return document.getElementById(listId)[index].value; 
    }, 

    actions: {
        submit() {
            this.get('submit')(this.get('sessionId'), this.get('empId'), this.get('pointId'));
        },

        setSessionValue() {
            this.set('sessionId', this.get('getListValue')('sessionsList'));
        },

        setEmployeeValue() {
            this.set('empId', this.get('getListValue')('employeesList'));
        },

        setPointValue() {
            this.set('pointId', this.get('getListValue')('pointsList'));
        }
    }
});
