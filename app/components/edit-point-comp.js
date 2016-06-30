import Ember from 'ember';

export default Ember.Component.extend({
    pointId: null,
    pointAddress: null,

    actions: {
        selectPoint(point) {
            this.set('pointId', point.get('id'));
            this.set('pointAddress', point.get('address'));
        },

        submit() {
            this.get('submit')(this.get('pointId'),this.get('pointAddress'));
        }
    }
});
