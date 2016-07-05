import Ember from 'ember';

export default Ember.Component.extend({
    session: null,

    actions: {
        selectItem(listName, attributeName) {
            let list = document.getElementById(listName);
            let index = list.selectedIndex;
            this.set(attributeName, list[index].value);
        },

        submit() {
            this.get('submit')(
                document.getElementById('giveDatePicker').value,
                document.getElementById('returnDatePicker').value
            );
        }
    }
});