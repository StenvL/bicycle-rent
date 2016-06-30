import Ember from 'ember';

export default Ember.Component.extend({
    bicycleId: null,

    actions: {
        submit() {
            if(this.get('bicycleId')) {
                this.get('submit')(this.get('bicycleId'));
            }
        },

        selectBicycleValue() {
            let curIndex = document.getElementById('bicyclesList').selectedIndex;
            this.set('bicycleId', document.getElementById('bicyclesList')[curIndex].value);
        }
    }
});
