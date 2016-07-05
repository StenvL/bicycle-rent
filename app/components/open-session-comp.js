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

        selectEmployeeGiveValue() {
            let curIndex = document.getElementById('employeesList').selectedIndex;
            this.set('employeeGiveId', document.getElementById('employeesList')[curIndex].value);            
        },

        selectClientValue() {
            let curIndex = document.getElementById('clientsList').selectedIndex;
            this.set('clientId', document.getElementById('clientsList')[curIndex].value);
        },

        selectBicycleValue() {
            let curIndex = document.getElementById('bicyclesList').selectedIndex;
            this.set('bicycleId', document.getElementById('bicyclesList')[curIndex].value);
        },

        selectStartPointValue() {
            let curIndex = document.getElementById('startPointsList').selectedIndex;
            this.set('startPointId', document.getElementById('startPointsList')[curIndex].value);
        }
    }
});
