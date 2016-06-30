import Ember from 'ember';

export default Ember.Component.extend({
    empId: null,
    empFullname: null,
    empPosition: null,

    isDataValid: Ember.computed('empFullname', 'empPosition', function() {
        return this.get('empFullname') && this.get('empPosition') 
    }),

    actions: {
        selectEmployee(employee) {
            this.set('empId', employee.get('id'));
            this.set('empFullname', employee.get('fullName'));
            this.set('empPosition', employee.get('position'));
        },

        submit() {
            this.get('submit')(this.get('empId'),this.get('empFullname'),this.get('empPosition'));
        }
    }
});
