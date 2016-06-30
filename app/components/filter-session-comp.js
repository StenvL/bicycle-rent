import Ember from 'ember';

export default Ember.Component.extend({
    sessionList: [],
    selectedDate: null,
    selectedBicyclelId: null,

    getListBicyclesValue() {
        let selIndex = document.getElementById('bicyclesList').selectedIndex;
        return document.getElementById('bicyclesList')[selIndex].value;
    },

    actions: {
        showFilteredData() {
            if (this.get('selectedDate') && this.get('getListBicyclesValue')()) {
                this.get('filterByDateAndModel')(this.get('selectedDate'), this.get('getListBicyclesValue')());
            } 
            else if (this.get('selectedDate')) {
                this.get('filterByDate')(this.get('selectedDate'));
            } 
            else if (this.get('getListBicyclesValue')()) {
                this.get('filterByModel')(this.get('getListBicyclesValue')());
            }
            else {
                this.set('sessionsList', []);
            }
        },

        selectSession(session) {
            var sessionClone = {};
            for (var key in session) {
                sessionClone[key] = session[key];
            }
            this.get('selectSession')(sessionClone);
        }
    }   
});
