import Ember from 'ember';

export default Ember.Component.extend({
    session: null,
    ids: {
        bicycleId: null,
        empGiveId: null,
        empTakeId: null,
        startPointId: null,
        endPointId: null
    },

    actions: {
        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        },

        submit() {
            if (!this.get('ids.bicycleId')) { this.set('ids.bicycleId', this.get('session.bicycle.id')); }
            if (!this.get('ids.empGiveId')) { this.set('ids.empGiveId', this.get('session.employeeGive.id')); }
            if (!this.get('ids.empTakeId')) { this.set('ids.empTakeId', this.get('session.employeeTake.id')); }
            if (!this.get('ids.startPointId')) { this.set('ids.startPointId', this.get('session.startPoint.id')); }
            if (!this.get('ids.endPointId')) { this.set('ids.endPointId', this.get('session.endPoint.id')); }

            let giveDatePicker = document.getElementById('giveDatePicker');
            let returnDatePicker = document.getElementById('returnDatePicker');

            if (giveDatePicker && returnDatePicker) {
                this.get('submit')(this.get('ids'),
                    document.getElementById('giveDatePicker').value,
                    document.getElementById('returnDatePicker').value
                );
            } else if(giveDatePicker) {
                this.get('submit')(this.get('ids'),
                    document.getElementById('giveDatePicker').value,
                    null
                );
            } else {
                this.get('submit')(this.get('ids'),
                    null,
                    document.getElementById('returnDatePicker').value                    
                );
            }
        }
    }
});