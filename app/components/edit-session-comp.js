import Ember from 'ember';

export default Ember.Component.extend({
    session: null,

    actions: {
        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        },

        submit() {
            this.get('submit')(
                document.getElementById('giveDatePicker').value,
                document.getElementById('returnDatePicker').value
            );
        }
    }
});