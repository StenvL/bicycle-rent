import Ember from 'ember';

export default Ember.Component.extend({
    employeeId: null,

    actions: {
        submit() {
            if(this.get('employeeId')) {
                this.get('submit')(this.get('employeeId'));
            }
        },

        selectEmployeeValue() {
            let curIndex = document.getElementById('employeesList').selectedIndex;
            this.set('employeeId', document.getElementById('employeesList')[curIndex].value);
        }
    }
});