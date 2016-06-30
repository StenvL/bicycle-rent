import Ember from 'ember';

export default Ember.Component.extend({
    bicycleId: null,
    bicycleModel: null,
    bicycleDescription: null,

    actions: {
        selectBicycle(bicycle) {
            this.set('bicycleId', bicycle.get('id'));
            this.set('bicycleModel', bicycle.get('model'));
            this.set('bicycleDescription', bicycle.get('description'));
        },

        submit() {
            this.get('submit')(this.get('bicycleId'),this.get('bicycleModel'),this.get('bicycleDescription'));
        }
    }
});
