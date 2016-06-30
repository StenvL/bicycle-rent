import Ember from 'ember';

export default Ember.Component.extend({
    pointId: null,

    actions: {
        submit() {
            if(this.get('pointId')) {
                this.get('submit')(this.get('pointId'));
            }
        },

        selectPointValue() {
            let curIndex = document.getElementById('pointsList').selectedIndex;
            this.set('pointId', document.getElementById('pointsList')[curIndex].value);
        }
    }
});