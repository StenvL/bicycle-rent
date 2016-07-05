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

    getListValue(listId) {
    	var index = document.getElementById(listId).selectedIndex;
    	return document.getElementById(listId)[index].value;
    },

    actions: {
        submit() {
            this.get('submit')(this.get('bicycleId'), this.get('pointId'));
        },

        setPointValue() {
            this.set('pointId', this.get('getListValue')('pointsList'));
        },

        setBicycleValue() {
            this.set('bicycleId', this.get('getListValue')('bicyclesList'));
        }

    }
});
