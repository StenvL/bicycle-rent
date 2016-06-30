import Ember from 'ember';

export default Ember.Component.extend({
    empName: "",
    empPosition: "",
    isDataValid: Ember.computed('empName', 'empPosition', function() {
        return this.get('empName') && this.get('empPosition');
    }),

    actions:
    {
        submit() {
            this.get('submit')(this.get('empName'), this.get('empPosition'));
        }
    }
});
