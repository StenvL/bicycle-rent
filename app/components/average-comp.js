import Ember from 'ember';

export default Ember.Component.extend({
    averageTime: null,
    bicycleId: null,
    pointId: null,
    isDataValid: Ember.computed('bicycleId', 'pointId', function() {
        return this.get('bicycleId') && this.get('pointId');
    }),

    isAverageTimeAvailable: Ember.computed('averageTime', function() {
        return this.get('averageTime') !== -1;
    }),


    actions: {
        submit() {
            this.get('submit')(this.get('bicycleId'), this.get('pointId'));
        },

        selectItem(listId, attrName) {
            let list = document.getElementById(listId);
            this.set(attrName, list[list.selectedIndex].value);
        }
    }
});
